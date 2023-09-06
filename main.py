from __future__ import annotations


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
    def isBracketsSymbol(self) -> bool:
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


class LinkedBrailleSymbol(EmptyLinkedBrailleSymbol):
    def __init__(self, text_symbol: str):
        self.text_sym = text_symbol

    @property
    def isSpaceSymbol(self) -> bool:
        return self.text_sym == '⠀' or self.text_sym.isspace()
    @property
    def isNumericModeSymbol(self) -> bool:
        return self.text_sym == '⠼' and self.hasOnlyLeftSpace  # TODO: needs upgrading
    @property
    def isNotNumericModeSymbol(self) -> bool:
        return self.text_sym == '⠰'
    @property
    def isShiftModeSymbol(self) -> bool:
        return self.text_sym == '⠠'
    
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
                '⠂': lambda: ',' if self.hasOnlyRightSpace else 'ea',
                '⠆': lambda: ';' if self.hasOnlyRightSpace else 'bb',
                '⠒': lambda: ':' if self.hasOnlyRightSpace else 'cc',
                '⠲': lambda: '.' if self.hasOnlyRightSpace else 'dis',
                '⠢': lambda: 'en',
                '⠖': lambda: '!' if self.hasOnlyRightSpace else 'to',
                '⠶': lambda: '(' if self.hasOnlyLeftSpace else ')' if self.hasOnlyRightSpace else 'gg',
                '⠦': lambda: '«' if self.hasOnlyLeftSpace else 'his',
                '⠔': lambda: 'in',
                '⠴': lambda: '»' if self.hasOnlyRightSpace else 'was',
                '⠌': lambda: '/' if self.betweenSpaces else 'st',  # TODO: needs upgrading
                '⠬': lambda: 'ing',
                '⠼': lambda: '' if self.hasOnlyLeftSpace else 'ble',  # TODO: needs upgrading
                '⠜': lambda: 'ar',
                '⠄': lambda: '\'',
                '⠤': lambda: '-' if self.betweenSpaces else 'com',  # TODO: needs upgrading
                '⠈': lambda: '`',
                '⠘': lambda: '',
                '⠸': lambda: '',
                '⠐': lambda: '',
                '⠨': lambda: '',
                '⠰': lambda: '',
                '⠠': lambda: '',
            }[self.text_sym]()
        except KeyError:
            return self.text_sym


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
