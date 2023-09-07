from __future__ import annotations


ALL_WORDS = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'but', 'can', 'do', 'every', 'from', 'go', 'have', 'just', 'knowledge', 'like', 'more', 'not', 'people', 'quite', 'rather', 'so', 'that', 'us', 'very', 'it', 'you', 'as', 'and', 'for', 'of', 'the', 'with', 'ch', 'gh', 'sh', 'th', 'wh', 'ed', 'er', 'ou', 'ow', 'will', 'ea', 'bb', 'cc', 'dis', 'en', 'to', 'gg', 'his', 'in', 'was', 'st', 'ing', 'ble', 'ar', 'com', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', '\'', '-']


class EmptyLinkedBrailleSymbol:
    @property
    def isSpaceSymbol(self) -> bool:
        return True
    @property
    def isNumericModeSymbol(self) -> bool:
        return False
    @property
    def isShiftModeSymbol(self) -> bool:
        return False
    @property
    def isNumberSymbol(self) -> bool:
        return False
    
    def setSideBrailleSymbols(self, left: LinkedBrailleSymbol | None, right: LinkedBrailleSymbol | None) -> EmptyLinkedBrailleSymbol:
        self.last = left
        self.next = right
        return self
    
    @property
    def betweenSpaces(self) -> bool:
        return self.last.isSpaceSymbol if self.last else self.next.isSpaceSymbol
    @property
    def hasLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol if self.last else True
    @property
    def hasRightSpace(self) -> bool:
        return self.next.isSpaceSymbol if self.next else True
    @property
    def hasOnlyLeftSpace(self) -> bool:
        return self.hasLeftSpace and not self.hasRightSpace
    @property
    def hasOnlyRightSpace(self) -> bool:
        return not self.hasLeftSpace and self.hasRightSpace
    @property
    def hasNumericMode(self) -> bool:
        return self.last.hasNumericMode if self.last else False
    @property
    def hasShiftMode(self) -> bool:
        return self.last.isShiftModeSymbol if self.last else False
    @property
    def hasLeftNumber(self) -> bool:
        return False
    @property
    def hasRightNumber(self) -> bool:
        return False


class LinkedBrailleSymbol(EmptyLinkedBrailleSymbol):
    def __init__(self, text_symbol: str):
        self.text_sym = text_symbol

    @property
    def isSpaceSymbol(self) -> bool:
        return self.text_sym == '⠀' or self.text_sym.isspace()
    @property
    def isNumericModeSymbol(self) -> bool:
        return self.text_sym == '⠼' and self.hasOnlyLeftSpace and self.hasRightNumber  # TODO: needs upgrading
    @property
    def isNotNumericModeSymbol(self) -> bool:
        return self.text_sym == '⠰'
    @property
    def isShiftModeSymbol(self) -> bool:
        return self.text_sym == '⠠'
    @property
    def isNumberSymbol(self) -> bool:
        return self.text_sym in ('⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚')
    
    def setSideBrailleSymbols(self, left: LinkedBrailleSymbol | None, right: LinkedBrailleSymbol | None) -> LinkedBrailleSymbol:
        self.last = left or EmptyLinkedBrailleSymbol().setSideBrailleSymbols(None, self)
        self.next = right or EmptyLinkedBrailleSymbol().setSideBrailleSymbols(self, None)
        return self

    @property
    def betweenSpaces(self) -> bool:
        return self.last.isSpaceSymbol and self.next.isSpaceSymbol
    @property
    def hasLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol
    @property
    def hasRightSpace(self) -> bool:
        return self.next.isSpaceSymbol
    @property
    def hasOnlyLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol and not self.next.isSpaceSymbol
    @property
    def hasOnlyRightSpace(self) -> bool:
        return not self.last.isSpaceSymbol and self.next.isSpaceSymbol
    @property
    def hasNumericMode(self) -> bool:
        return self.isNumericModeSymbol or (False if self.isNotNumericModeSymbol else self.last.hasNumericMode)
    @property
    def hasShiftMode(self) -> bool:
        return self.last.isShiftModeSymbol
    @property
    def hasLeftNumber(self) -> bool:
        return self.last.isNumberSymbol
    @property
    def hasRightNumber(self) -> bool:
        return self.next.isNumberSymbol
    
    def getSymbol(self) -> str:
        try:
            return {
                '⠁': lambda: '1' if self.hasNumericMode else 'A' if self.hasShiftMode else 'a',
                '⠃': lambda: '2' if self.hasNumericMode else 'B' if self.hasShiftMode else 'but' if self.betweenSpaces else 'b',
                '⠉': lambda: '3' if self.hasNumericMode else 'C' if self.hasShiftMode else 'can' if self.betweenSpaces else 'c',
                '⠙': lambda: '4' if self.hasNumericMode else 'D' if self.hasShiftMode else 'do' if self.betweenSpaces else 'd',
                '⠑': lambda: '5' if self.hasNumericMode else 'E' if self.hasShiftMode else 'every' if self.betweenSpaces else 'e',
                '⠋': lambda: '6' if self.hasNumericMode else 'F' if self.hasShiftMode else 'from' if self.betweenSpaces else 'f',
                '⠛': lambda: '7' if self.hasNumericMode else 'G' if self.hasShiftMode else 'go' if self.betweenSpaces else 'g',
                '⠓': lambda: '8' if self.hasNumericMode else 'H' if self.hasShiftMode else 'have' if self.betweenSpaces else 'h',
                '⠊': lambda: '9' if self.hasNumericMode else 'I' if self.hasShiftMode else 'i',
                '⠚': lambda: '0' if self.hasNumericMode else 'J' if self.hasShiftMode else 'just' if self.betweenSpaces else 'j',
                '⠅': lambda: 'K' if self.hasShiftMode else 'knowledge' if self.betweenSpaces else 'k',
                '⠇': lambda: 'L' if self.hasShiftMode else 'like' if self.betweenSpaces else 'l',
                '⠍': lambda: 'M' if self.hasShiftMode else 'more' if self.betweenSpaces else 'm',
                '⠝': lambda: 'N' if self.hasShiftMode else 'not' if self.betweenSpaces else 'n',
                '⠕': lambda: 'O' if self.hasShiftMode else 'o',
                '⠏': lambda: 'P' if self.hasShiftMode else 'people' if self.betweenSpaces else 'p',
                '⠟': lambda: 'Q' if self.hasShiftMode else 'quite' if self.betweenSpaces else 'q',
                '⠗': lambda: 'R' if self.hasShiftMode else 'rather' if self.betweenSpaces else 'r',
                '⠎': lambda: 'S' if self.hasShiftMode else 'so' if self.betweenSpaces else 's',
                '⠞': lambda: 'T' if self.hasShiftMode else 'that' if self.betweenSpaces else 't',
                '⠥': lambda: 'U' if self.hasShiftMode else 'us' if self.betweenSpaces else 'u',
                '⠧': lambda: 'Y' if self.hasShiftMode else 'very' if self.betweenSpaces else 'v',
                '⠭': lambda: 'X' if self.hasShiftMode else 'it' if self.betweenSpaces else 'x',
                '⠽': lambda: 'Y' if self.hasShiftMode else 'you' if self.betweenSpaces else 'y',
                '⠵': lambda: 'Z' if self.hasShiftMode else 'as' if self.betweenSpaces else 'z',
                '⠯': lambda: 'and' if self.betweenSpaces else None,
                '⠿': lambda: 'for' if self.betweenSpaces else None,
                '⠷': lambda: 'of' if self.betweenSpaces else None,
                '⠮': lambda: 'the' if self.betweenSpaces else None,
                '⠾': lambda: 'with' if self.betweenSpaces else None,
                '⠡': lambda: 'ch',
                '⠣': lambda: 'gh',
                '⠩': lambda: 'sh',
                '⠹': lambda: 'th',
                '⠱': lambda: 'wh',
                '⠫': lambda: 'ed',
                '⠻': lambda: 'er',
                '⠳': lambda: 'ou',
                '⠪': lambda: 'ow',
                '⠺': lambda: 'W' if self.hasShiftMode else 'will' if self.betweenSpaces else 'w',
                '⠂': lambda: ',' if self.hasRightSpace else 'ea',
                '⠆': lambda: ';' if self.hasRightSpace else 'bb',
                '⠒': lambda: ':' if self.hasRightSpace else 'cc',
                '⠲': lambda: '.' if self.hasRightSpace else 'dis',
                '⠢': lambda: 'en',
                '⠖': lambda: '!' if self.hasOnlyRightSpace else 'to',  # TODO: needs upgrading
                '⠶': lambda: '(' if self.hasLeftSpace else ')' if self.hasRightSpace else 'gg',  # TODO: needs upgrading
                '⠦': lambda: '«' if self.hasOnlyLeftSpace else 'his',
                '⠔': lambda: 'in',
                '⠴': lambda: '»' if self.hasOnlyRightSpace else 'was',
                '⠌': lambda: '/' if self.betweenSpaces else 'st',  # TODO: needs upgrading
                '⠬': lambda: 'ing',
                '⠼': lambda: '' if self.hasOnlyLeftSpace and self.hasRightNumber else '#' if self.betweenSpaces else 'ble',  # TODO: needs upgrading
                '⠜': lambda: 'ar',
                '⠄': lambda: '\'',
                '⠤': lambda: '-' if self.betweenSpaces else 'com',  # TODO: needs upgrading
                '⠈': lambda: '`',
                '⠘': lambda: '',
                '⠸': lambda: '',
                '⠐': lambda: '',
                '⠨': lambda: ',' if self.hasLeftNumber and self.hasRightNumber and self.hasNumericMode else '`',
                '⠰': lambda: '',
                '⠠': lambda: '',
            }[self.text_sym]()
        except KeyError:
            return self.text_sym


class EmptyLinkedLatinWord:
    @property
    def isSpaceSymbol(self) -> bool:
        return True
    @property
    def isNumberSymbol(self) -> bool:
        return False
    @property
    def isDotNumberSymbol(self) -> bool:
        return False
    
    def setSideLatinWords(self, left: LinkedLatinWord | None, right: str | None) -> EmptyLinkedLatinWord:
        self.last = left
        self.next = right
        return self
    
    @property
    def betweenSpaces(self) -> bool:
        return self.last.isSpaceSymbol if self.last else self.next.isSpaceSymbol
    @property
    def hasLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol if self.last else True
    @property
    def hasRightSpace(self) -> bool:
        return self.next.isSpaceSymbol if self.next else True
    @property
    def hasOnlyLeftSpace(self) -> bool:
        return self.hasLeftSpace and not self.hasRightSpace
    @property
    def hasOnlyRightSpace(self) -> bool:
        return not self.hasLeftSpace and self.hasRightSpace
    @property
    def hasLeftNumber(self) -> bool:
        return False
    @property
    def hasRightNumber(self) -> bool:
        return False
    @property
    def hasLeftDotNumber(self) -> bool:
        return False
    @property
    def hasRightDotNumber(self) -> bool:
        return False


class LinkedLatinWord(EmptyLinkedLatinWord):
    def __init__(self, text_word: str, shorten_syllables: bool = True, shorten_words: bool = True, autocorrect: bool = True):
        self.__ac = autocorrect
        self.__ss = shorten_syllables
        self.__sw = shorten_words
        self.word = text_word
    
    @property
    def isSpaceSymbol(self) -> bool:
        return self.word.isspace()
    @property
    def isNumberSymbol(self) -> bool:
        return self.word in list('1234567890')
    @property
    def isDotNumberSymbol(self) -> bool:
        return self.word in (',', '.') and self.last.isNumberSymbol and self.next.isNumberSymbol
    
    def setSideLatinWords(self, left: LinkedLatinWord | None, right: str | None) -> LinkedLatinWord:
        self.last = left or EmptyLinkedLatinWord().setSideLatinWords(None, self)
        self.next = LinkedLatinWord(right).setSideLatinWords(self, None) if right else EmptyLinkedLatinWord().setSideLatinWords(self, None)
        return self
    
    @property
    def betweenSpaces(self) -> bool:
        return self.last.isSpaceSymbol and self.next.isSpaceSymbol
    @property
    def hasLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol
    @property
    def hasRightSpace(self) -> bool:
        return self.next.isSpaceSymbol
    @property
    def hasOnlyLeftSpace(self) -> bool:
        return self.last.isSpaceSymbol and not self.next.isSpaceSymbol
    @property
    def hasOnlyRightSpace(self) -> bool:
        return not self.last.isSpaceSymbol and self.next.isSpaceSymbol
    @property
    def hasLeftNumber(self) -> bool:
        return self.last.isNumberSymbol
    @property
    def hasRightNumber(self) -> bool:
        return self.next.isNumberSymbol
    @property
    def hasLeftDotNumber(self) -> bool:
        return self.last.isDotNumberSymbol
    @property
    def hasRightDotNumber(self) -> bool:
        return self.next.isDotNumberSymbol
    
    def getBrailleSymbol(self) -> str | None:
        try:
            return {
                'a': lambda: '⠁',
                'c': lambda: '⠉',
                'b': lambda: '⠃',
                'd': lambda: '⠙',
                'e': lambda: '⠑',
                'f': lambda: '⠋',
                'g': lambda: '⠛',
                'h': lambda: '⠓',
                'i': lambda: '⠊',
                'j': lambda: '⠚',
                'k': lambda: '⠅',
                'l': lambda: '⠇',
                'm': lambda: '⠍',
                'n': lambda: '⠝',
                'o': lambda: '⠕',
                'p': lambda: '⠏',
                'q': lambda: '⠟',
                'r': lambda: '⠗',
                's': lambda: '⠎',
                't': lambda: '⠞',
                'u': lambda: '⠥',
                'v': lambda: '⠧',
                'w': lambda: '⠺' if not self.betweenSpaces else None,
                'x': lambda: '⠭',
                'y': lambda: '⠽',
                'z': lambda: '⠵',
                'A': lambda: '⠠⠁',
                'B': lambda: '⠠⠃',
                'C': lambda: '⠠⠉',
                'D': lambda: '⠠⠙',
                'E': lambda: '⠠⠑',
                'F': lambda: '⠠⠋',
                'G': lambda: '⠠⠛',
                'H': lambda: '⠠⠓',
                'I': lambda: '⠠⠊',
                'J': lambda: '⠠⠚',
                'K': lambda: '⠠⠅',
                'L': lambda: '⠠⠇',
                'M': lambda: '⠠⠍',
                'N': lambda: '⠠⠝',
                'O': lambda: '⠠⠕',
                'P': lambda: '⠠⠏',
                'Q': lambda: '⠠⠟',
                'R': lambda: '⠠⠗',
                'S': lambda: '⠠⠎',
                'T': lambda: '⠠⠞',
                'U': lambda: '⠠⠥',
                'V': lambda: '⠠⠧',
                'W': lambda: '⠠⠺',
                'X': lambda: '⠠⠭',
                'Y': lambda: '⠠⠽',
                'Z': lambda: '⠠⠵',
                'but': lambda: '⠃' if self.betweenSpaces and self.__sw else None,
                'can': lambda: '⠉' if self.betweenSpaces and self.__sw else None,
                'do': lambda: '⠙' if self.betweenSpaces and self.__sw else None,
                'every': lambda: '⠑' if self.betweenSpaces and self.__sw else None,
                'from': lambda: '⠋' if self.betweenSpaces and self.__sw else None,
                'go': lambda: '⠛' if self.betweenSpaces and self.__sw else None,
                'have': lambda: '⠓' if self.betweenSpaces and self.__sw else None,
                'just': lambda: '⠚' if self.betweenSpaces and self.__sw else None,
                'knowledge': lambda: '⠅' if self.betweenSpaces and self.__sw else None,
                'like': lambda: '⠇' if self.betweenSpaces and self.__sw else None,
                'more': lambda: '⠍' if self.betweenSpaces and self.__sw else None,
                'not': lambda: '⠝' if self.betweenSpaces and self.__sw else None,
                'people': lambda: '⠏' if self.betweenSpaces and self.__sw else None,
                'quite': lambda: '⠏' if self.betweenSpaces and self.__sw else None,
                'rather': lambda: '⠗' if self.betweenSpaces and self.__sw else None,
                'so': lambda: '⠎' if self.betweenSpaces and self.__sw else None,
                'that': lambda: '⠞' if self.betweenSpaces and self.__sw else None,
                'us': lambda: '⠥' if self.betweenSpaces and self.__sw else None,
                'very': lambda: '⠧' if self.betweenSpaces and self.__sw else None,
                'it': lambda: '⠭' if self.betweenSpaces and self.__sw else None,
                'you': lambda: '⠽' if self.betweenSpaces and self.__sw else None,
                'as': lambda: '⠵' if self.betweenSpaces and self.__sw else None,
                'and': lambda: '⠯' if self.betweenSpaces and self.__sw else None,
                'for': lambda: '⠿' if self.betweenSpaces and self.__sw else None,
                'of': lambda: '⠷' if self.betweenSpaces and self.__sw else None,
                'the': lambda: '⠮' if self.betweenSpaces and self.__sw else None,
                'with': lambda: '⠾' if self.betweenSpaces and self.__sw else None,
                'ch': lambda:  '⠡' if self.__ss else None,
                'gh': lambda:  '⠣' if self.__ss else None,
                'sh': lambda:  '⠩' if self.__ss else None,
                'th': lambda:  '⠹' if self.__ss else None,
                'wh': lambda:  '⠱' if self.__ss else None,
                'ed': lambda:  '⠫' if self.__ss else None,
                'er': lambda:  '⠻' if self.__ss else None,
                'ou': lambda:  '⠳' if self.__ss else None,
                'ow': lambda:  '⠪' if self.__ss else None,
                'will': lambda: '⠺' if self.betweenSpaces and self.__sw else None,
                'ea': lambda: '⠂' if not self.hasRightSpace and self.__ss else None,
                'bb': lambda: '⠆' if not self.hasRightSpace and self.__ss else None,
                'cc': lambda: '⠒' if not self.hasRightSpace and self.__ss else None,
                'dis': lambda: '⠲' if not self.hasRightSpace and self.__ss else None,
                'en': lambda: '⠢',
                'to': lambda: '⠖' if not self.hasOnlyRightSpace and self.__ss else '⠖' if self.betweenSpaces and self.__sw else None,  # TODO: needs upgrading
                'gg': lambda: '⠶' if not self.hasLeftSpace and not self.hasRightSpace and self.__ss else None,
                'his': lambda: '⠦' if not self.hasOnlyLeftSpace and ((not self.betweenSpaces and self.__ss) or self.__sw) else None,
                'in': lambda: '⠔' if ((not self.betweenSpaces and self.__ss) or self.__sw) else None,
                'was': lambda: '⠴' if not self.hasOnlyRightSpace and ((not self.betweenSpaces and self.__ss) or self.__sw) else None,
                'st': lambda: '⠌' if not self.betweenSpaces and self.__ss else None,
                'ing': lambda: '⠬' if self.__ss else None,
                'ble': lambda: '⠼' if ((not self.hasOnlyLeftSpace or not self.hasRightNumber) or not self.betweenSpaces) and self.__ss else None,
                'ar': lambda: '⠜' if self.__ss else None,
                'com': lambda: '⠤' if not self.betweenSpaces and self.__ss else None,
                '1': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠁' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '2': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠃' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '3': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠉' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '4': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠙' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '5': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠑' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '6': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠋' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '7': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠛' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '8': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠓' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '9': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠊' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                '0': lambda: ('' if self.hasLeftNumber or self.hasLeftDotNumber else ('⠀' if not self.hasLeftSpace and self.__ac else '') + '⠼') + '⠚' + ('' if self.hasRightNumber or self.hasRightDotNumber else '⠰'),
                ',': lambda: '⠂' + ('' if self.hasRightSpace else '⠀'),
                ';': lambda: '⠆' + ('' if self.hasRightSpace else '⠀'),
                ':': lambda: '⠒' + ('' if self.hasRightSpace else '⠀'),
                '.': lambda: '⠲' + ('' if self.hasRightSpace else '⠀'),
                '!': lambda: '⠖' + ('' if self.hasRightSpace else '⠀') if not self.hasLeftSpace else None,  # TODO: needs upgrade
                '(': lambda: ('' if self.hasLeftSpace else '⠀') + '⠶',
                ')': lambda: '⠶' + ('' if self.hasRightSpace else '⠀') if not self.hasLeftSpace else None,
                '«': lambda: ('' if self.hasLeftSpace else '⠀') + '⠦' if not self.hasRightSpace else None,
                '»': lambda: '⠴' + ('' if self.hasRightSpace else '⠀') if not self.hasLeftSpace else None,
                '/': lambda: '⠌' if self.betweenSpaces else None,
                '#': lambda: '⠼' if self.betweenSpaces else None,
                '\'': lambda: '⠄',
                '-': lambda: '⠤' if self.betweenSpaces else None,
                ' ': lambda: ' ',
            }[self.word]()
        except KeyError:
            return self.word


class BrailleText:
    def __init__(self, text_braille: str):
        self.text = text_braille
    
    def encode(self) -> str:
        braille_list = [LinkedBrailleSymbol(sym) for sym in self.text]
        for index, symbol in enumerate(braille_list):
            symbol.setSideBrailleSymbols(
                braille_list[index - 1] if index > 0 else None,
                braille_list[index + 1] if index + 1 < len(braille_list) else None
            )
        
        return ''.join([braille.getSymbol() for braille in braille_list])
    
    def decode(self) -> str:
        text_list = list(self.text)
        braille_list = []
        index = 0
        while index < len(text_list):
            for i in range(9, 0, -1):
                word = ''.join(text_list[index:index+i])
                if word in ALL_WORDS:
                    latin_word = LinkedLatinWord(word).setSideLatinWords(
                        braille_list[-1] if braille_list else None,
                        text_list[index+i] if index+i < len(text_list) else None
                    )
                    if latin_word.getBrailleSymbol() is not None:
                        braille_list.append(latin_word)
                        index += i
                        break
                elif len(word) == 1:
                    braille_list.append(LinkedLatinWord(word).setSideLatinWords(
                        braille_list[-1] if braille_list else None,
                        text_list[index+i] if index+i < len(text_list) else None
                    ))
                    index += 1
                    break
        
        return ''.join([braille.getBrailleSymbol() for braille in braille_list])

