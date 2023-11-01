const UNITS = Symbol('UNITS');


const ALL_WORDS = {
    en: [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'but', 'can', 'do', 'every', 'from', 'go', 'have', 'just', 'knowledge', 'like', 'more', 'not', 'people', 'quite', 'rather', 'so', 'that', 'us', 'very', 'it', 'you', 'as', 'and', 'for', 'of', 'the', 'with', 'ch', 'gh', 'sh', 'th', 'wh', 'ed', 'er', 'ou', 'ow', 'will', 'ea', 'bb', 'cc', 'dis', 'en', 'to', 'gg', 'his', 'in', 'was', 'st', 'ing', 'ble', 'ar', 'com', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
    ru: [' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
}


const ENCODER = {
    fr: {
        DEFAULT: {
            [UNITS]: {
                ANY: {
                    TRADITIONAL_NUMBERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'],
                    ANTOINE_NUMBERS: ['⠡', '⠣', '⠩', '⠹', '⠱', '⠫', '⠻', '⠳', '⠪'],
                },
                MODE: {
                    TRADITIONAL_NUMBER: '⠼',
                    ANTOINE_NUMBER: '⠠',
                    LETTER: '⠰',
                    CAPITAL: '⠨',
                    SUPERSCRIPT: '⠈',
                    SUBSCRIPT: '⠢',
                    CURRENCY: '⠘',
                    SYMBOL: '⠐',
                },
            
            // 1-2-4-5 => (a-j||1-0)
            },  '⠁': function() { return this.onGlobalTraditionalNumberMode ? '1' : this.onCapitalMode ? 'A' : 'a'
            },  '⠃': function() { return this.onGlobalTraditionalNumberMode ? '2' : this.onCapitalMode ? 'B' : 'b'
            },  '⠉': function() { return this.onGlobalTraditionalNumberMode ? '3' : this.onCapitalMode ? 'C' : this.onSymbolMode ? '©' : 'c'
            },  '⠙': function() { return this.onGlobalTraditionalNumberMode ? '4' : this.onCapitalMode ? 'D' : 'd'
            },  '⠑': function() { return this.onGlobalTraditionalNumberMode ? '5' : this.onCapitalMode ? 'E' : this.onCurrencyMode ? '€' : 'e'
            },  '⠋': function() { return this.onGlobalTraditionalNumberMode ? '6' : this.onCapitalMode ? 'F' : 'f'
            },  '⠛': function() { return this.onGlobalTraditionalNumberMode ? '7' : this.onCapitalMode ? 'G' : 'g'
            },  '⠓': function() { return this.onGlobalTraditionalNumberMode ? '8' : this.onCapitalMode ? 'H' : 'h'
            },  '⠊': function() { return this.onGlobalTraditionalNumberMode ? '9' : this.onCapitalMode ? 'I' : 'i'
            },  '⠚': function() { return this.onGlobalTraditionalNumberMode ? '0' : this.onCapitalMode ? 'J' : 'j'
            
            // 1-2-3-4-5 => (k-t)
            },  '⠅': function() { return this.onCapitalMode ? 'K' : 'k'
            },  '⠇': function() { return this.onCapitalMode ? 'L' : this.onCurrencyMode ? '£' : 'l'
            },  '⠍': function() { return this.onCapitalMode ? 'M' : 'm'
            },  '⠝': function() { return this.onCapitalMode ? 'N' : 'n'
            },  '⠕': function() { return this.onCapitalMode ? 'O' : 'o'
            },  '⠏': function() { return this.onCapitalMode ? 'P' : this.onSymbolMode ? '§' : 'p'
            },  '⠟': function() { return this.onCapitalMode ? 'Q' : 'q'
            },  '⠗': function() { return this.onCapitalMode ? 'R' : this.onSymbolMode ? '®' : 'r'
            },  '⠎': function() { return this.onCapitalMode ? 'S' : this.onCurrencyMode ? '$' : 's'
            },  '⠞': function() { return this.onCapitalMode ? 'T' : this.onSymbolMode ? '™' : 't'
            
            // 1-2-3-4-5-6 => (u-ù)
            },  '⠥': function() { return this.onCapitalMode ? 'U' : 'u'
            },  '⠧': function() { return this.onCapitalMode ? 'V' : 'v'
            },  '⠭': function() { return this.onCapitalMode ? 'X' : 'x'
            },  '⠽': function() { return this.onCapitalMode ? 'Y' : this.onCurrencyMode ? '¥' : 'y'
            },  '⠵': function() { return this.onCapitalMode ? 'Z' : 'z'
            },  '⠯': function() { return this.onCapitalMode ? 'Ç' : 'ç'
            },  '⠿': function() { return this.onCapitalMode ? 'É' : 'é'
            },  '⠷': function() { return this.onCapitalMode ? 'À' : 'à'
            },  '⠮': function() { return this.onCapitalMode ? 'È' : 'è'
            },  '⠾': function() { return this.onCapitalMode ? 'Ù' : 'ù'
            
            // 1-2-4-5-6 => (â-w)
            },  '⠡': function() { return this.onGlobalAntoineNumberMode ? '1' : this.onCapitalMode ? 'Â' : 'â'
            },  '⠣': function() { return this.onGlobalAntoineNumberMode ? '2' : this.onCapitalMode ? 'Ê' : 'ê'
            },  '⠩': function() { return this.onGlobalAntoineNumberMode ? '3' : this.onCapitalMode ? 'Î' : 'î'
            },  '⠹': function() { return this.onGlobalAntoineNumberMode ? '4' : this.onCapitalMode ? 'Ô' : 'ô'
            },  '⠱': function() { return this.onGlobalAntoineNumberMode ? '5' : this.onCapitalMode ? 'Û' : 'û'
            },  '⠫': function() { return this.onGlobalAntoineNumberMode ? '6' : this.onCapitalMode ? 'Ë' : 'ë'
            },  '⠻': function() { return this.onGlobalAntoineNumberMode ? '7' : this.onCapitalMode ? 'Ï' : 'ï'  // TODO: onCurrencyMode => speech bubble
            },  '⠳': function() { return this.onGlobalAntoineNumberMode ? '8' : this.onCapitalMode ? 'Ü' : 'ü'  // TODO: onCurrencyMode => thought bubble
            },  '⠪': function() { return this.onGlobalAntoineNumberMode ? '9' : this.onCapitalMode ? 'Ö|Œ' : 'ö|œ'
            },  '⠺': function() { return this.onCapitalMode ? 'W' : 'w'
            
            // 2-3-5-6 [down shift] => (signs)
            },  '⠂': function() { return ','
            },  '⠆': function() { return ';'
            },  '⠒': function() { return this.onGlobalAntoineNumberMode ? '\u00F7' : ':'  // ÷
            },  '⠲': function() { return this.onGlobalAntoineNumberMode ? '/'      : '.'
            },  '⠢': function() { return this.onGlobalAntoineNumberMode ? ''       : '?'  // MODE: SUBSCRIPT  //TODO: (start) emphasis
            },  '⠖': function() { return this.onGlobalAntoineNumberMode ? '+'      : '!'
            },  '⠶': function() { return this.onGlobalAntoineNumberMode ? '='      : '"'
            },  '⠦': function() { return '('
            },  '⠔': function() { return this.onGlobalAntoineNumberMode ? '\u00D7' : undefined  // ×  // TODO: (end) emphasis
            },  '⠴': function() { return ')'
            
            // { 3, 3-6, 6 } [decade]
            },  '⠄': function() { return this.onGlobalAntoineNumberMode ? '\u002E' : "'"  // .  // TODO: The space in numbers between thousands.
            },  '⠤': function() { return this.onGlobalAntoineNumberMode ? '-'      : '\u2013'  // –
            },  '⠠': function() { return ''  // MODE: ANTOINE_NUMBER
            
            // { 4-5, 3-4-5, 3-4-5-6, 4-5-6, 5-6 } [right shift]
            },  '⠈': function() { return ''  // MODE: SUPERSCRIPT
            },  '⠘': function() { return ''  // MODE: CURRENCY
            },  '⠌': function() { return this.onGlobalAntoineNumberMode ? '/' : 'ì'
            },  '⠜': function() { return this.onGlobalAntoineNumberMode ? '@' : this.onCapitalMode ? 'Ä|Æ' : 'ä|æ'  // TODO: Also marks the end of a verse.
            },  '⠬': function() { return this.onGlobalAntoineNumberMode ? '*' : (this.onSymbolMode ? (this.next?.next?.char == this.next?.char == '⠬' ? '‱' : this.next?.char == '⠬' ? '‰' : '%') : ((this.last?.last?.onSymbolMode && this.last?.last?.char == this.last?.char == '⠬') || (this.last?.onSymbolMode && this.last?.char == '⠬')) ? '' : undefined) ?? 'ò'  // TODO: Used to mark a footnote or endnote.
            },  '⠼': function() { return this.onGlobalAntoineNumberMode ? '0' : '#'  // MODE: TRADITIONAL_NUMBER
            },  '⠨': function() { return ''  // MODE: CAPITAL
            },  '⠸': function() { return '\u0300'  // diacritical `
            },  '⠐': function() { return ''  // MODE: SYMBOL
            },  '⠰': function() { return undefined  // MODE: LETTER
            
            // { 0, 1-2-3-4-5-6 } => (space)
            },  ' ': function() { return ' '
            },  '⠿': function() { return this.onSymbolMode ? '&' : undefined
            },
        },
    },
    en: {
        EBAE: {
            // UNITS
            [UNITS]: {
                ANY: {
                    TRADITIONAL_NUMBERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'],
                    LETTERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚', '⠅', '⠇', '⠍', '⠝', '⠕', '⠏', '⠟', '⠗', '⠎', '⠞', '⠥', '⠧', '⠭', '⠽', '⠵', '⠺'],
                    PUNCTUATION_MARKS: ['⠂', '⠆', '⠒', '⠲', '⠖'],
                    APOSTROPHE: '⠄',
                    ACCENT_MARK: '⠈',
                    EMPHASIS: '⠨',
                    HYPHEN: '⠤',
                },
                MODE: {
                    TRADITIONAL_NUMBER: '⠼',
                    LETTER: '⠰',
                    SYMBOL: '⠐',
                    CAPITAL: '⠠',
                },
            
            // 1-2-4-5 => (a-j)
            },  '⠁': function() { return                                                                                                                                                                                                                                                                  this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7CE}' : '1') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D400}' : 'A') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41A}' : 'a')
            },  '⠃': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'but'  ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7CF}' : '2') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D401}' : 'B') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41B}' : 'b')
            },  '⠉': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'can'  ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D0}' : '3') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D402}' : 'C') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41C}' : 'c')
            },  '⠙': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'do'   ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D1}' : '4') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D403}' : 'D') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41D}' : 'd')
            },  '⠑': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'every') : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D2}' : '5') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D404}' : 'E') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41E}' : 'e')
            },  '⠋': function() { return this.hasLetterAtLeft && !this.onGlobalTraditionalNumberMode ? 'self' : (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'from' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D3}' : '6') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D405}' : 'F') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41F}' : 'f')
            },  '⠛': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'go'   ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D4}' : '7') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D406}' : 'G') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D420}' : 'g')
            },  '⠓': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'have' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D5}' : '8') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D407}' : 'H') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D421}' : 'h')
            },  '⠊': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'I'    ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D6}' : '9') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D408}' : 'I') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D422}' : 'i')
            },  '⠚': function() { return                                                                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'just' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D7}' : '0') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D409}' : 'J') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D423}' : 'j')

            // 1-2-3-4-5 => (k-t)
            },  '⠅': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'knowledge') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40A}' : 'K') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D424}' : 'k')
            },  '⠇': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'like'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40B}' : 'L') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D425}' : 'l')
            },  '⠍': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'more'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40C}' : 'M') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D426}' : 'm')
            },  '⠝': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'not'      ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40D}' : 'N') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D427}' : 'n')
            },  '⠕': function() { return                                                                                                                                                                                                                                                                  this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40E}' : 'O') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D428}' : 'o')
            },  '⠏': function() { return this.last?.onAccentMarkUnderMode && this.last?.char == '⠒' ? '%' : (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'people'   ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40F}' : 'P') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D429}' : 'p')
            },  '⠟': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'quite'    ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D410}' : 'Q') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42A}' : 'q')
            },  '⠗': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'rather'   ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D411}' : 'R') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42B}' : 'r')
            },  '⠎': function() { return (this.hasApostropheAtRight = false) ? '§' :                        (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'so'       ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D412}' : 'S') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42C}' : 's')
            },  '⠞': function() { return                                                                    (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'that'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D413}' : 'T') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42D}' : 't')

            // 1-2-3-4-5-6 => (u-w)
            },  '⠥': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'us'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D414}' : 'U') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42E}' : 'u')
            },  '⠧': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'very') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D415}' : 'V') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42F}' : 'v')
            },  '⠭': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'it'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D417}' : 'X') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D431}' : 'x')
            },  '⠽': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'you' ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D418}' : 'Y') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D432}' : 'y')
            },  '⠵': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'as'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D419}' : 'Z') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D433}' : 'z')
            },  '⠯': function() { return this.onAccentMarkUnderMode ? '&' : !((this.hasSpaceAtLeft || this.onAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'and' )
            },  '⠿': function() { return                                    !((this.hasSpaceAtLeft || this.onAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'for' )
            },  '⠷': function() { return                                    !((this.hasSpaceAtLeft || this.onAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'of'  )
            },  '⠮': function() { return                                    !((this.hasSpaceAtLeft || this.onAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'the' )
            },  '⠾': function() { return                                    !((this.hasSpaceAtLeft || this.onAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'with')

            // 1-2-4-5-6
            },  '⠡': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'child') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ch')
            },  '⠣': function() { return                                                                                                                                                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'gh')
            },  '⠩': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'shall') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'sh') 
            },  '⠹': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'this' ) : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'th')
            },  '⠱': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'which') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'wh') 
            },  '⠫': function() { return                                                                                                                                                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ed') 
            },  '⠻': function() { return                                                                                                                                                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'er')
            },  '⠳': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'out'  ) : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ou') 
            },  '⠪': function() { return                                                                                                                                                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ow') 
            },  '⠺': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'will' ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D416}' : 'W') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D430}' : 'w')

            // 2-3-4-5 [down shift] => (signs)
            },  '⠂': function() { return this.onSymbolMode ? '\u3003' :                                                                                                  !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ',' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ea')  // 〃
            },  '⠆': function() { return                                                                                                                                 !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ';' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'bb')
            },  '⠒': function() { return this.next?.char == '⠏' ? '' :                                                                                                   !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ':' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'cc')
            },  '⠲': function() { return this.hasTraditionalNumberModeSymbolAtRight || this.onAccentMarkUnderMode ? '$' :                                                !(this._adv && (this.hasLetterAtLeft && this.hasLetterAtRight || this._ac)) ? '.' :                                                                          (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'dd')
            },  '⠢': function() { return                                                                                                                                                                                                                                                                                              (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'en')
            },  '⠖': function() { return                                                                                                                                 !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? this._adv ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'to') : '!' : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ff')
            },  '⠶': function() { return this.onCapitalMode ? '[' : (this.hasApostropheAtRight = false) ? ']' : this.hasSpaceAtLeft ? '(' : this.hasSpaceAtRight ? ')' : !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? undefined :                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'gg')
            },  '⠦': function() { return this.onAccentMarkUnderMode ? '?' : this.onApostropheUnderMode ? '\u2018' : this._ ? '\u201C' : undefined  // ‘ “
            },  '⠔': function() { return this.last?.char == this.char ? '*' : this.char == this.next?.char ? '' :                                                                                                                                                                                                                     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'in')
            },  '⠴': function() { return (this.hasCapitalModeSymbolAtRight = false) ? '\u2019' : this._ ? '\u201D' :                                                     !this._adv ? undefined :                                                                                                                                     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'by')  // ’ ”

            // { 3, 3-6, 6 } [decade]
            },  '⠄': function() { return this.inEllipsis ? '.' : this.onCapitalMode ? '' : "'"  // TODO: termination sign => onCapitalMode  // APOSTROPHE
            },  '⠤': function() { return this._adv && this.hasLetterAtRight ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'com') : this.char == this?.next.char == this?.next?.next.char == this?.next?.next?.next.char ? this.last?.last?.last?.last?.symbol() == '—' && this.last?.last?.last?.char == this.last?.last?.char == this.last?.char == this.char || this.last?.char != this.char ? '—' : '' : this.next?.char == this.char ? this.last?.last?.last?.last?.symbol() == '—' && this.last?.last?.last?.char == this.last?.last?.char == this.last?.char == this.char || this.last?.char != this.char ? '–' : '' : '-'
            },  '⠠': function() { return ''  // MODE: CAPITAL

            // { 4-5, 3-4-5, 3-4-5-6, 4-5-6, 5-6 } [right shift]
            },  '⠈': function() { return this.hasLetterAtRight ^ this.next?.char == '⠎' ? '\u0300' : ''  // diacritical `
            },  '⠘': function() { return undefined
            },  '⠌': function() { return                                                                           (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'st' )
            },  '⠜': function() { return this.onSymbolMode ? '|' :                                                 (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ar' )
            },  '⠬': function() { return !(this.hasLetterAtLeft && this.hasSpaceAtRight || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ing')
            },  '⠼': function() { return !(this._adv && (this.hasLetterAtLeft && this.hasSpaceAtRight)) ? '' :     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ble')  // MODE: TRADITIONAL_NUMBER
            },  '⠨': function() { return this.hasNumberAtLeft && this.last?.onGlobalTraditionalNumberMode && this.hasTraditionalNumberModeSymbolAtRight? '.' : ''  // EMPHASIS
            },  '⠸': function() { return undefined
            },  '⠐': function() { return ''  // MODE: SYMBOL
            },  '⠰': function() { return ''  // MODE: LETTER

            // { 0, 1-2-3-4-5-6 } => (space)
            },  ' ': function() { return ' '
            },  '⠿': function() { return this.onSymbolMode ? '&' : undefined
            }
        },
        UEB: {
            // UNITS
            [UNITS]: {
                ANY: {
                    TRADITIONAL_NUMBERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'],
                    LETTERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚', '⠅', '⠇', '⠍', '⠝', '⠕', '⠏', '⠟', '⠗', '⠎', '⠞', '⠥', '⠧', '⠭', '⠽', '⠵', '⠺'],
                    PUNCTUATION_MARKS: ['⠂', '⠆', '⠒', '⠲', '⠖'],
                    APOSTROPHE: '⠄',
                    ACCENT_MARK: '⠈',
                    EMPHASIS: '⠨',
                    HYPHEN: '⠤',
                },
                MODE: {
                    TRADITIONAL_NUMBER: '⠼',
                    LETTER: '⠰',
                    SYMBOL: '⠐',
                    CAPITAL: '⠠',
                },
            
            // 1-2-4-5 => (a-j)
            },  '⠁': function() { return                                                                                                                                                                                           this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7CE}' : '1') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D400}' : 'A') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41A}' : 'a')
            },  '⠃': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'but'  ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7CF}' : '2') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D401}' : 'B') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41B}' : 'b')
            },  '⠉': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'can'  ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D0}' : '3') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D402}' : 'C') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41C}' : 'c')
            },  '⠙': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'do'   ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D1}' : '4') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D403}' : 'D') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41D}' : 'd')
            },  '⠑': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'every') : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D2}' : '5') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D404}' : 'E') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41E}' : 'e')
            },  '⠋': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'from' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D3}' : '6') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D405}' : 'F') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D41F}' : 'f')
            },  '⠛': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'go'   ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D4}' : '7') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D406}' : 'G') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D420}' : 'g')
            },  '⠓': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'have' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D5}' : '8') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D407}' : 'H') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D421}' : 'h')
            },  '⠊': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'I'    ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D6}' : '9') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D408}' : 'I') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D422}' : 'i')
            },  '⠚': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'just' ) : this.onGlobalTraditionalNumberMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D7D7}' : '0') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D409}' : 'J') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D423}' : 'j')

            // 1-2-3-4-5 => (k-t)
            },  '⠅': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'knowledge') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40A}' : 'K') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D424}' : 'k')
            },  '⠇': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'like'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40B}' : 'L') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D425}' : 'l')
            },  '⠍': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'more'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40C}' : 'M') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D426}' : 'm')
            },  '⠝': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'not'      ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40D}' : 'N') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D427}' : 'n')
            },  '⠕': function() { return                                                                                                                                                                                                                                                                                         this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40E}' : 'O') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D428}' : 'o')
            },  '⠏': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'people'   ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D40F}' : 'P') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D429}' : 'p')
            },  '⠟': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'quite'    ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D410}' : 'Q') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42A}' : 'q')
            },  '⠗': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'rather'   ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D411}' : 'R') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42B}' : 'r')
            },  '⠎': function() { return this.onAccentMarkUnderMode ? '$' : this.next?.char == '⠘' ? '§' : (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'so'       ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D412}' : 'S') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42C}' : 's')
            },  '⠞': function() { return                                                                   (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'that'     ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D413}' : 'T') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42D}' : 't')

            // 1-2-3-4-5-6 => (u-w)
            },  '⠥': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'us'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D414}' : 'U') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42E}' : 'u')
            },  '⠧': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'very') : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D415}' : 'V') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D42F}' : 'v')
            },  '⠭': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'it'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D417}' : 'X') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D431}' : 'x')
            },  '⠽': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'you' ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D418}' : 'Y') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D432}' : 'y')
            },  '⠵': function() { return (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'as'  ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D419}' : 'Z') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D433}' : 'z')
            },  '⠯': function() { return !((this.hasSpaceAtLeft || this.anAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'and')
            },  '⠿': function() { return !((this.hasSpaceAtLeft || this.anAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'for')
            },  '⠷': function() { return !((this.hasSpaceAtLeft || this.anAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'of')
            },  '⠮': function() { return !((this.hasSpaceAtLeft || this.anAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'the')
            },  '⠾': function() { return !((this.hasSpaceAtLeft || this.anAnyMode || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.last?.char)) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight || ['⠯', '⠿', '⠷', '⠮', '⠾'].includes(this.next?.char)) || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'with')

            // 1-2-4-5-6
            },  '⠡': function() { return                                                                (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'child') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ch')
            },  '⠣': function() { return this.onSymbolMode ? '(' :                                                                                                                                                                                                                                                        (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'gh')
            },  '⠩': function() { return                                                                (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'shall') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'sh') 
            },  '⠹': function() { return this.onCapitalMode && this.last?.onAccentMarkUnderMode ? '†' : (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'this' ) : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'th') 
            },  '⠱': function() { return                                                                (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'which') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'wh') 
            },  '⠫': function() { return                                                                                                                                                                                                                                                                                  (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ed') 
            },  '⠻': function() { return this.onCapitalMode && this.last?.onAccentMarkUnderMode ? '‡' :                                                                                                                                                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'er') 
            },  '⠳': function() { return                                                                (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'out'  ) : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ou') 
            },  '⠪': function() { return                                                                                                                                                                                                                                                                                  (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ow') 
            },  '⠺': function() { return                                                                (this.hasSpaceAtLeft || this.onAnyMode) && (this.hasSpaceAtRight || this.hasApostropheAtRight || this.hasPunctuationMarkAtRight) ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'will' ) : this.onCapitalMode || this.onGlobalCapitalMode ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D416}' : 'W') : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '\u{1D430}' : 'w')

            // 2-3-4-5 [down shift] => (signs)
            },  '⠂': function() { return this.onSymbolMode ? '\u3003' :                                                                             !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ',' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ea')  // 〃
            },  '⠆': function() { return                                                                                                            !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ';' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'bb')
            },  '⠒': function() { return                                                                                                            !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? ':' :                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'cc')
            },  '⠲': function() { return this.inEllipsis ? '.' :                                                                                    !(this._adv && (this.hasLetterAtLeft && this.hasLetterAtRight || this._ac)) ? '.' :                                                                          (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'dd')
            },  '⠢': function() { return                                                                                                                                                                                                                                                                         (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'en')
            },  '⠖': function() { return                                                                                                            !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? this._adv ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'to') : '!' : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ff')
            },  '⠶': function() { return this.hasSpaceAtLeft ? '(' : this.hasSpaceAtRight ? ')' :                                                   !(this.hasLetterAtLeft && this.hasLetterAtRight || this._ac) ? undefined :                                                                                   (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'gg')
            },  '⠦': function() { return this.onAccentMarkUnderMode ? '?' : this.onApostropheUnderMode ? '\u2018' : this._ ? '\u201C' : undefined  // ‘ “
            },  '⠔': function() { return this.onSymbolMode ? '*' :                                                                                                                                                                                                                                               (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'in')
            },  '⠴': function() { return this.last?.char == '⠨' ? '%' : (this.hasCapitalModeSymbolAtRight = false) ? '\u2019' : this._ ? '\u201D' : !this._adv ? undefined :                                                                                                                                     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'by')  // ’ ”

            // { 3, 3-6, 6 } [decade]
            },  '⠄': function() { return this.onCapitalMode ? '' : "'"  // Termination sign  // APOSTROPHE
            },  '⠤': function() { return this._adv && this.hasLetterAtRight ? (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'com') : this.onCapitalMode ? this.last?.onSymbolMode ? '—' : '–': '-'
            },  '⠠': function() { return ''  // MODE: CAPITAL

            // { 4-5, 3-4-5, 3-4-5-6, 4-5-6, 5-6 } [right shift]
            },  '⠈': function() { return this.hasLetterAtRight ^ this.next?.char == '⠎' ? '\u0300' : ''  // diacritical `
            },  '⠘': function() { return undefined
            },  '⠌': function() { return                                                                                                     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'st' )
            },  '⠜': function() { return this.onSymbolMode ? ')' :                                                                           (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ar' )
            },  '⠬': function() { return                           !(this.hasLetterAtLeft && this.hasSpaceAtRight || this._ac) ? undefined : (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ing')
            },  '⠼': function() { return                           !(this._adv && (this.hasLetterAtLeft && this.hasSpaceAtRight)) ? '' :     (this.onGlobalEmphasisMode || this.onSuperGlobalEmphasisMode ? '' : 'ble')  // MODE: TRADITIONAL_NUMBER
            },  '⠨': function() { return !this.hasLetterAtRight ? '.' : ''  // EMPHASIS
            },  '⠸': function() { return undefined
            },  '⠐': function() { return ''  // MODE: SYMBOL
            },  '⠰': function() { return undefined  // MODE: LETTER

            // { 0, 1-2-3-4-5-6 } => (space)
            },  ' ': function() { return ' '
            },  '⠿': function() { return this.onSymbolMode ? '&' : undefined
            },
        },
    }, 
    ru: {
        DEFAULT: {
            // UNITS
            [UNITS]: {
                ANY: {
                    TRADITIONAL_NUMBERS: ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'],
                },
                MODE: {
                    TRADITIONAL_NUMBER: '⠼',
                    LETTER: '⠰',
                    CAPITAL: '⠐',
                },
            
            //  1-2-4-5 => (a-j)
            },  '⠁': function() { return this.onTraditionalNumberMode ? '1' : this.onCapitalMode ? 'А' : 'а'
            },  '⠃': function() { return this.onTraditionalNumberMode ? '2' : this.onCapitalMode ? 'Б' : 'б'
            },  '⠉': function() { return this.onTraditionalNumberMode ? '3' : this.onCapitalMode ? 'Ц' : 'ц'
            },  '⠙': function() { return this.onTraditionalNumberMode ? '4' : this.onCapitalMode ? 'Д' : 'д'
            },  '⠑': function() { return this.onTraditionalNumberMode ? '5' : this.onCapitalMode ? 'Е' : 'е'
            },  '⠋': function() { return this.onTraditionalNumberMode ? '6' : this.onCapitalMode ? 'Ф' : 'ф'
            },  '⠛': function() { return this.onTraditionalNumberMode ? '7' : this.onCapitalMode ? 'Г' : 'г'
            },  '⠓': function() { return this.onTraditionalNumberMode ? '8' : this.onCapitalMode ? 'Х' : 'х'
            },  '⠊': function() { return this.onTraditionalNumberMode ? '9' : this.onCapitalMode ? 'И' : 'и'
            },  '⠚': function() { return this.onTraditionalNumberMode ? '0' : this.onCapitalMode ? 'Ж' : 'ж'

            // 1-2-3-4-5 => (k-t)
            },  '⠅': function() { return this.onCapitalMode ? 'К' : 'к'
            },  '⠇': function() { return this.onCapitalMode ? 'Л' : 'л'
            },  '⠍': function() { return this.onCapitalMode ? 'М' : 'м'
            },  '⠝': function() { return this.onCapitalMode ? 'Н' : 'н'
            },  '⠕': function() { return this.onCapitalMode ? 'О' : 'о'
            },  '⠏': function() { return this.onCapitalMode ? 'П' : 'п'
            },  '⠟': function() { return this.onCapitalMode ? 'Ч' : 'ч'
            },  '⠗': function() { return this.onCapitalMode ? 'Р' : 'р'
            },  '⠎': function() { return this.onCapitalMode ? 'С' : 'с'
            },  '⠞': function() { return this.onCapitalMode ? 'Т' : 'т'

            // 1-2-4-5-6 => (u-w)
            },  '⠥': function() { return this.onCapitalMode ? 'У' : 'У'
            },  '⠧': function() { return undefined
            },  '⠭': function() { return this.onCapitalMode ? 'Щ' : 'щ'
            },  '⠽': function() { return undefined
            },  '⠵': function() { return this.onCapitalMode ? 'З' : 'з'
            },  '⠯': function() { return this.onCapitalMode ? 'Й' : 'й'
            },  '⠿': function() { return undefined
            },  '⠷': function() { return this.onCapitalMode ? 'Ъ' : 'ъ'
            },  '⠮': function() { return this.onCapitalMode ? 'Ы' : 'ы'
            },  '⠾': function() { return this.onCapitalMode ? 'Ь' : 'ь'

            // 1-2-4-5-6
            },  '⠡': function() { return this.onCapitalMode ? 'Ё' : 'ё'
            },  '⠣': function() { return '('
            },  '⠩': function() { return undefined
            },  '⠹': function() { return undefined
            },  '⠱': function() { return this.onCapitalMode ? 'Ш' : 'ш'
            },  '⠫': function() { return this.onCapitalMode ? 'Я' : 'я'
            },  '⠻': function() { return undefined
            },  '⠳': function() { return this.onCapitalMode ? 'Ю' : 'ю'
            },  '⠪': function() { return this.onCapitalMode ? 'Э' : 'э'
            },  '⠺': function() { return this.onCapitalMode ? 'В' : 'в'

            // 2-3-4-5 [down shift] => (signs)
            },  '⠂': function() { return ','
            },  '⠆': function() { return ';'
            },  '⠒': function() { return ':'
            },  '⠲': function() { return '.'
            },  '⠢': function() { return '?'
            },  '⠖': function() { return '!'
            },  '⠶': function() { return undefined
            },  '⠦': function() { return '«'
            },  '⠔': function() { return undefined
            },  '⠴': function() { return '»'

            // { 3, 3-6, 6 } [decade]
            },  '⠄': function() { return "'"
            },  '⠤': function() { return this._adv && !this.betweenSpaces                 ? 'com' : '-'
            },  '⠠': function() { return undefined

            // { 4-5, 3-4-5, 3-4-5-6, 4-5-6, 5-6 } [right shift]
            },  '⠈': function() { return '`'
            },  '⠘': function() { return undefined  // Disable shift mode (ru)
            },  '⠌': function() { return '/'
            },  '⠜': function() { return ')'
            },  '⠬': function() { return undefined
            },  '⠼': function() { return '#'  // Enable number mode
            },  '⠨': function() { return this.betweenNumbers && this.onTraditionalNumberMode ? ',' : '\u0340'
            },  '⠸': function() { return undefined
            },  '⠐': function() { return undefined  // Enable shift mode (ru)
            },  '⠰': function() { return undefined  // Disable number mode

            // { 0, 1-2-3-4-5-6 } => (space)
            },  ' ': function() { return ' '
            },  '⠿': function() { return undefined
            },
        },
    }
}
ENCODER.en.DEFAULT = ENCODER.en.EBAE;


const DECODER = {
    en: {
            'a': function() { return '⠁'
        },  'c': function() { return '⠉'
        },  'b': function() { return '⠃'
        },  'd': function() { return '⠙'
        },  'e': function() { return '⠑'
        },  'f': function() { return '⠋'
        },  'g': function() { return '⠛'
        },  'h': function() { return '⠓'
        },  'i': function() { return '⠊'
        },  'j': function() { return '⠚'
        },  'k': function() { return '⠅'
        },  'l': function() { return '⠇'
        },  'm': function() { return '⠍'
        },  'n': function() { return '⠝'
        },  'o': function() { return '⠕'
        },  'p': function() { return '⠏'
        },  'q': function() { return '⠟'
        },  'r': function() { return '⠗'
        },  's': function() { return '⠎'
        },  't': function() { return '⠞'
        },  'u': function() { return '⠥'
        },  'v': function() { return '⠧'
        },  'w': function() { return !this.betweenSpaces ? '⠺' : undefined
        },  'x': function() { return '⠭'
        },  'y': function() { return '⠽'
        },  'z': function() { return '⠵'
        },  'A': function() { return '⠠⠁'
        },  'B': function() { return '⠠⠃'
        },  'C': function() { return '⠠⠉'
        },  'D': function() { return '⠠⠙'
        },  'E': function() { return '⠠⠑'
        },  'F': function() { return '⠠⠋'
        },  'G': function() { return '⠠⠛'
        },  'H': function() { return '⠠⠓'
        },  'I': function() { return '⠠⠊'
        },  'J': function() { return '⠠⠚'
        },  'K': function() { return '⠠⠅'
        },  'L': function() { return '⠠⠇'
        },  'M': function() { return '⠠⠍'
        },  'N': function() { return '⠠⠝'
        },  'O': function() { return '⠠⠕'
        },  'P': function() { return '⠠⠏'
        },  'Q': function() { return '⠠⠟'
        },  'R': function() { return '⠠⠗'
        },  'S': function() { return '⠠⠎'
        },  'T': function() { return '⠠⠞'
        },  'U': function() { return '⠠⠥'
        },  'V': function() { return '⠠⠧'
        },  'W': function() { return '⠠⠺'
        },  'X': function() { return '⠠⠭'
        },  'Y': function() { return '⠠⠽'
        },  'Z': function() { return '⠠⠵'
        },  'but'      : function() { return this.betweenSpaces && this._sw ? '⠃' : undefined
        },  'can'      : function() { return this.betweenSpaces && this._sw ? '⠉' : undefined
        },  'do'       : function() { return this.betweenSpaces && this._sw ? '⠙' : undefined
        },  'every'    : function() { return this.betweenSpaces && this._sw ? '⠑' : undefined
        },  'from'     : function() { return this.betweenSpaces && this._sw ? '⠋' : undefined
        },  'go'       : function() { return this.betweenSpaces && this._sw ? '⠛' : undefined
        },  'have'     : function() { return this.betweenSpaces && this._sw ? '⠓' : undefined
        },  'just'     : function() { return this.betweenSpaces && this._sw ? '⠚' : undefined
        },  'knowledge': function() { return this.betweenSpaces && this._sw ? '⠅' : undefined
        },  'like'     : function() { return this.betweenSpaces && this._sw ? '⠇' : undefined
        },  'more'     : function() { return this.betweenSpaces && this._sw ? '⠍' : undefined
        },  'not'      : function() { return this.betweenSpaces && this._sw ? '⠝' : undefined
        },  'people'   : function() { return this.betweenSpaces && this._sw ? '⠏' : undefined
        },  'quite'    : function() { return this.betweenSpaces && this._sw ? '⠏' : undefined
        },  'rather'   : function() { return this.betweenSpaces && this._sw ? '⠗' : undefined
        },  'so'       : function() { return this.betweenSpaces && this._sw ? '⠎' : undefined
        },  'that'     : function() { return this.betweenSpaces && this._sw ? '⠞' : undefined
        },  'us'       : function() { return this.betweenSpaces && this._sw ? '⠥' : undefined
        },  'very'     : function() { return this.betweenSpaces && this._sw ? '⠧' : undefined
        },  'it'       : function() { return this.betweenSpaces && this._sw ? '⠭' : undefined
        },  'you'      : function() { return this.betweenSpaces && this._sw ? '⠽' : undefined
        },  'as'       : function() { return this.betweenSpaces && this._sw ? '⠵' : undefined
        },  'and'      : function() { return this.betweenSpaces && this._sw ? '⠯' : undefined
        },  'for'      : function() { return this.betweenSpaces && this._sw ? '⠿' : undefined
        },  'of'       : function() { return this.betweenSpaces && this._sw ? '⠷' : undefined
        },  'the'      : function() { return this.betweenSpaces && this._sw ? '⠮' : undefined
        },  'with'     : function() { return this.betweenSpaces && this._sw ? '⠾' : undefined
        },  'ch'  : function() { return this._ss ? '⠡' : undefined
        },  'gh'  : function() { return this._ss ? '⠣' : undefined
        },  'sh'  : function() { return this._ss ? '⠩' : undefined
        },  'th'  : function() { return this._ss ? '⠹' : undefined
        },  'wh'  : function() { return this._ss ? '⠱' : undefined
        },  'ed'  : function() { return this._ss ? '⠫' : undefined
        },  'er'  : function() { return this._ss ? '⠻' : undefined
        },  'ou'  : function() { return this._ss ? '⠳' : undefined
        },  'ow'  : function() { return this._ss ? '⠪' : undefined
        },  'will': function() { return this._sw &&  this.betweenSpaces   ? '⠺' : undefined
        },  'ea'  : function() { return this._ss && !this.hasSpaceAtRight ? '⠂' : undefined
        },  'bb'  : function() { return this._ss && !this.hasSpaceAtRight ? '⠆' : undefined
        },  'cc'  : function() { return this._ss && !this.hasSpaceAtRight ? '⠒' : undefined
        },  'dis' : function() { return this._ss && !this.hasSpaceAtRight ? '⠲' : undefined
        },  'en'  : function() { return '⠢'
        },  'to'  : function() { return !this.hasSpaceOnlyAtRight && this._ss ? '⠖' : this.betweenSpaces && this._sw ? '⠖' : undefined
        },  'gg'  : function() { return !this.hasSpaceAtLeft && !this.hasSpaceAtRight && this._ss ? '⠶' : undefined
        },  'his' : function() { return !this.hasSpaceOnlyAtLeft && ((!this.betweenSpaces && this._ss) || this._sw) ? '⠦' : undefined
        },  'in'  : function() { return ((!this.betweenSpaces && this._ss) || this._sw) ? '⠔' : undefined
        },  'was' : function() { return !this.hasSpaceOnlyAtRight && ((!this.betweenSpaces && this._ss) || this._sw) ? '⠴' : undefined
        },  'st'  : function() { return !this.betweenSpaces && this._ss ? '⠌' : undefined
        },  'ing' : function() { return this._ss ? '⠬' : undefined
        },  'ble' : function() { return ((!this.hasSpaceOnlyAtLeft || !this.hasNumberAtRight) || !this.betweenSpaces) && this._ss ? '⠼' :  undefined
        },  'ar'  : function() { return this._ss ? '⠜' : undefined
        },  'com' : function() { return !this.betweenSpaces && this._ss ? '⠤' : undefined
        },  '1': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠁' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '2': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠃' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '3': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠉' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '4': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠙' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '5': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠑' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '6': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠋' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '7': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠛' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '8': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠓' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '9': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠊' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  '0': function() { return (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠚' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰')
        },  ',': function() { return '⠂' + (this.hasSpaceAtRight ? '' : '⠀')
        },  ';': function() { return '⠆' + (this.hasSpaceAtRight ? '' : '⠀')
        },  ':': function() { return '⠒' + (this.hasSpaceAtRight ? '' : '⠀')
        },  '.': function() { return '⠲' + (this.hasSpaceAtRight ? '' : '⠀')
        },  '!': function() { return !this.hasSpaceAtLeft ? '⠖' + (this.hasSpaceAtRight ? '' : '⠀') : undefined
        },  '(': function() { return (this.hasSpaceAtLeft ? '' : '⠀') + '⠶'
        },  ')': function() { return !this.hasSpaceAtLeft ? '⠶' + (this.hasSpaceAtRight ? '' : '⠀') : undefined
        },  '«': function() { return !this.hasSpaceAtRight ? (this.hasSpaceAtLeft ? '' : '⠀') + '⠦' : undefined
        },  '»': function() { return !this.hasSpaceAtLeft ? '⠴' + (this.hasSpaceAtRight ? '' : '⠀') : undefined
        },  '/': function() { return this.betweenSpaces ? '⠌' : undefined
        },  '#': function() { return this.betweenSpaces ? '⠼' : undefined
        },  "'": function() { return '⠄'
        },  '-': function() { return this.betweenSpaces ? '⠤' : undefined
        },  ' ': function() { return ' '
        },
    },
    ru: {
        'а': () => '⠁',
        'ц': () => '⠉',
        'б': () => '⠃',
        'д': () => '⠙',
        'е': () => '⠑',
        'ф': () => '⠋',
        'г': () => '⠛',
        'х': () => '⠓',
        'и': () => '⠊',
        'ж': () => '⠚',
        'к': () => '⠅',
        'л': () => '⠇',
        'м': () => '⠍',
        'н': () => '⠝',
        'о': () => '⠕',
        'п': () => '⠏',
        'р': () => '⠗',
        'с': () => '⠎',
        'т': () => '⠞',
        'у': () => '⠥',
        'в': () => '⠺',
        'щ': () => '⠭',
        'з': () => '⠵',
        'А': () => '⠠⠁',
        'Б': () => '⠠⠃',
        'Ц': () => '⠠⠉',
        'Д': () => '⠠⠙',
        'Е': () => '⠠⠑',
        'Ф': () => '⠠⠋',
        'Г': () => '⠠⠛',
        'Х': () => '⠠⠓',
        'И': () => '⠠⠊',
        'Ж': () => '⠠⠚',
        'К': () => '⠠⠅',
        'Л': () => '⠠⠇',
        'М': () => '⠠⠍',
        'Н': () => '⠠⠝',
        'О': () => '⠠⠕',
        'П': () => '⠠⠏',
        'Р': () => '⠠⠗',
        'С': () => '⠠⠎',
        'Т': () => '⠠⠞',
        'У': () => '⠠⠥',
        'В': () => '⠠⠺',
        'Щ': () => '⠠⠭',
        'З': () => '⠠⠵',
        '1': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠁' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '2': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠃' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '3': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠉' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '4': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠙' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '5': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠑' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '6': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠋' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '7': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠛' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '8': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠓' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '9': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠊' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        '0': () => (this.hasNumberAtLeft || this.hasDotNumberAtLeft ? '' : (!this.hasSpaceAtLeft && this._ac ? '⠀' : '') + '⠼') + '⠚' + (this.hasNumberAtRight || this.hasDotNumberAtRight ? '' : '⠰'),
        ',': () => '⠂' + (this.hasSpaceAtRight ? '' : '⠀'),
        ';': () => '⠆' + (this.hasSpaceAtRight ? '' : '⠀'),
        ':': () => '⠒' + (this.hasSpaceAtRight ? '' : '⠀'),
        '.': () => '⠲' + (this.hasSpaceAtRight ? '' : '⠀'),
        '!': () => !this.hasSpaceAtLeft ? '⠖' + (this.hasSpaceAtRight ? '' : '⠀') : undefined,  // TODO: needs upgrade
        '(': () => '⠣',
        ')': () => '⠜',
        '«': () => !this.hasSpaceAtRight ? (this.hasSpaceAtLeft ? '' : '⠀') + '⠦' : undefined,
        '»': () => !this.hasSpaceAtLeft ? '⠴' + (this.hasSpaceAtRight ? '' : '⠀') : undefined,
        '/': () => this.betweenSpaces ? '⠌' : undefined,
        '#': () => this.betweenSpaces ? '⠼' : undefined,
        "'": () => '⠄',
        '-': () => this.betweenSpaces ? '⠤' : undefined,
        ' ': () => ' ',
    }
}


class Linked {
    _mod = {};

    /* ========== Define properties: get [mode|under-mode] symbol (Interface) ========== */

    // Types of symbols
    get isSpaceSymbol() {}
    get isNumberSymbol() {}
    get isAntoineNumberSymbol() {}
    get isDotNumberSymbol() {}
    get isMathSignSymbol() {}
    get isLetterSymbol() {}
    get isHyphenSymbol() {}
    get isPunctuationMarkSymbol() {}

    // Mod symbols
    get isTraditionalNumberModeSymbol() {}
    get isAntoineNumberModeSymbol() {}
    get isLetterModeSymbol() {}
    get isCapitalModeSymbol() {}
    get isSuperscriptModeSymbol() {}
    get isSubscriptModeSymbol() {}
    get isCurrencyModeSymbol() {}
    get isSymbolModeSymbol() {}

    // Under-mod symbols
    get isApostropheUnderModeSymbol() {}
    get isAccentMarkUnderModeSymbol() {}
    get isEmphasisUnderModeSymbol() {}

    /* ========== Define properties: get position for symbol ========== */

    // Space
    get hasSpaceAtLeft() {
        return this.last?.isSpaceSymbol ?? true;
    }
    get hasSpaceAtRight() {
        return this.next?.isSpaceSymbol ?? true;
    }
    get hasSpaceOnlyAtLeft() {
        return this.hasSpaceAtLeft && !this.hasSpaceAtRight;
    }
    get hasSpaceOnlyAtRight() {
        return !this.hasSpaceAtLeft && this.hasSpaceAtRight;
    }
    get betweenSpaces() {
        return this.hasSpaceAtLeft && this.hasSpaceAtRight;
    }

    // Number
    get hasNumberAtLeft() {
        return this.last?.isNumberSymbol ?? false;
    }
    get hasNumberAtRight() {
        return this.next?.isNumberSymbol ?? false;
    }
    get hasNumberOnlyAtLeft() {
        return this.hasNumberAtLeft && !this.hasNumberAtRight;
    }
    get hasNumberOnlyAtRight() {
        return !this.hasNumberAtLeft && !this.hasNumberAtRight;
    }
    get betweenNumbers() {
        return this.hasNumberAtLeft && this.hasNumberAtRight;
    }

    // Number With Spaces
    get hasNumberAtLeftAfterSpaces() {
        return this.hasNumberAtLeft || (this.hasSpaceAtLeft && this.next.hasNumberAtLeftAfterSpaces);
    }
    get hasNumberAtRightAfterSpaces() {
        return this.hasNumberAtRight || (this.hasSpaceAtRight && this.next.hasNumberAtRightAfterSpaces);
    }
    get hasNumberOnlyAtLeftAfterSpaces() {
        return this.hasNumberAtLeftAfterSpaces && !this.hasNumberAtRightAfterSpaces;
    }
    get hasNumberOnlyAtRightAfterSpaces() {
        return !this.hasNumberAtLeftAfterSpaces && this.hasNumberAtRightAfterSpaces;
    }
    get betweenNumbersAfterSpaces() {
        return this.hasNumberAtLeftAfterSpaces && this.hasNumberAtRightAfterSpaces;
    }

    // Dot Number
    get hasDotNumberAtLeft() {
        return this.left?.isDotNumberSymbol ?? false;
    }
    get hasDotNumberAtRight() {
        return this.right?.isDotNumberSymbol ?? false;
    }
    get hasDotNumberOnlyAtLeft() {
        return this.hasDotNumberAtLeft && !this.hasDotNumberAtRight;
    }
    get hasDotNumberOnlyAtRight() {
        return !this.hasDotNumberAtLeft && !this.hasDotNumberAtRight;
    }
    get betweenDotNumbers() {
        return this.hasDotNumberAtLeft && this.hasDotNumberAtRight;
    }

    // Letters
    get hasLetterAtLeft() {
        return this.left?.isLetterSymbol ?? false;
    }
    get hasLetterAtRight() {
        return this.right?.isLetterSymbol ?? false;
    }
    get hasLetterOnlyAtLeft() {
        return this.hasLetterAtLeft && !this.hasLetterAtRight;
    }
    get hasLetterOnlyAtRight() {
        return !this.hasLetterAtLeft && this.hasLetterAtRight;
    }
    get betweenLetters() {
        return this.hasLetterAtLeft && this.hasLetterAtRight;
    }

    get hasHyphenAtLeft() {
        return this.left?.isHyphenSymbol ?? false;
    }
    get hasHyphenAtRight() {
        return this.right?.isHyphenSymbol ?? false;
    }
    get hasHyphenOnlyAtLeft() {
        return this.hasHyphenAtLeft && !this.hasHyphenAtRight;
    }
    get hasHyphenOnlyAtRight() {
        return !this.hasHyphenAtLeft && this.hasHyphenAtRight;
    }
    get betweenHyphens() {
        return this.hasHyphenAtLeft && this.hasHyphenAtRight;
    }

    // Punctuation Mark
    get hasPunctuationMarkAtLeft() {
        return this.left?.isPunctuationMarkSymbol ?? false;
    }
    get hasPunctuationMarkAtRight() {
        return this.right?.isPunctuationMarkSymbol ?? false;
    }
    get hasPunctuationMarkOnlyAtLeft() {
        return this.hasPunctuationMarkAtLeft && !this.hasPunctuationMarkAtRight;
    }
    get hasPunctuationMarkOnlyAtRight() {
        return !this.hasPunctuationMarkAtLeft && this.hasPunctuationMarkAtRight;
    }
    get betweenPunctuationMarks() {
        return this.hasPunctuationMarkAtLeft && this.hasPunctuationMarkAtRight;
    }

    // Ellipsis
    get inEllipsis() {
        return (this.last?.last?.char == this.last?.char == this.char) || (this.last?.char == this.char == this.next?.char) || (this.char == this.next?.char == this.next?.next?.char);
    }

    /* ========== Define properties: get position for mod symbol ========== */

    // Traditional Number
    get hasTraditionalNumberModeSymbolAtLeft() {
        return this.last?.isTraditionalNumberModeSymbol ?? false;
    }
    get hasTraditionalNumberModeSymbolAtRight() {
        return this.right?.isTraditionalNumberModeSymbol ?? false;
    }
    get hasTraditionalNumberModeSymbolOnlyAtLeft() {
        return this.hasTraditionalNumberModeSymbolAtLeft && !this.hasTraditionalNumberModeSymbolAtRight;
    }
    get hasTraditionalNumberModeSymbolOnlyAtRight() {
        return !this.hasTraditionalNumberModeSymbolAtLeft && this.hasTraditionalNumberModeSymbolAtRight;
    }
    get betweenTraditionalNumberModeSymbols() {
        return this.hasTraditionalNumberModeSymbolAtLeft && this.hasTraditionalNumberModeSymbolAtRight;
    }

    // Antoine Number
    get hasAntoineNumberModeSymbolAtLeft() {
        return this.last?.isAntoineNumberModeSymbol ?? false;
    }
    get hasAntoineNumberModeSymbolAtRight() {
        return this.right?.isAntoineNumberModeSymbol ?? false;
    }
    get hasAntoineNumberModeSymbolOnlyAtLeft() {
        return this.hasAntoineNumberModeSymbolAtLeft && !this.hasAntoineNumberModeSymbolAtRight;
    }
    get hasAntoineNumberModeSymbolOnlyAtRight() {
        return !this.hasAntoineNumberModeSymbolAtLeft && this.hasAntoineNumberModeSymbolAtRight;
    }
    get betweenAntoineNumberModeSymbols() {
        return this.hasAntoineNumberModeSymbolAtLeft && this.hasAntoineNumberModeSymbolAtRight;
    }

    // Letter
    get hasLetterModeSymbolAtLeft() {
        return this.last?.isLetterModeSymbol ?? false;
    }
    get hasLetterModeSymbolAtRight() {
        return this.right?.isLetterModeSymbol ?? false;
    }
    get hasLetterModeSymbolOnlyAtLeft() {
        return this.hasLetterModeSymbolAtLeft && !this.hasLetterModeSymbolAtRight;
    }
    get hasLetterModeSymbolOnlyAtRight() {
        return !this.hasLetterModeSymbolAtLeft && this.hasLetterModeSymbolAtRight;
    }
    get betweenLetterModeSymbols() {
        return this.hasLetterModeSymbolAtLeft && this.hasLetterModeSymbolAtRight;
    }

    // Capital
    get hasCapitalModeSymbolAtLeft() {
        return this.last?.isCapitalModeSymbol ?? false;
    }
    get hasCapitalModeSymbolAtRight() {
        return this.right?.isCapitalModeSymbol ?? false;
    }
    get hasCapitaModeSymbollOnlyAtLeft() {
        return this.hasCapitalModeSymbolAtLeft && !this.hasCapitalModeSymbolAtRight;
    }
    get hasCapitalModeSymbolOnlyAtRight() {
        return !this.hasCapitalModeSymbolAtLeft && this.hasCapitalModeSymbolAtRight;
    }
    get betweenCapitalModeSymbols() {
        return this.hasCapitalModeSymbolAtLeft && this.hasCapitalModeSymbolAtRight;
    }

    // Superscript
    get hasSuperscriptModeSymbolAtLeft() {
        return this.last?.isSuperScriptModeSymbol ?? false;
    }
    get hasSuperscriptModeSymbolAtRight() {
        return this.right?.isSuperScriptModeSymbol ?? false;
    }
    get hasSuperscriptModeSymbolOnlyAtLeft() {
        return this.hasSuperscriptModeSymbolAtLeft && !this.hasSuperscriptModeSymbolAtRight;
    }
    get hasSuperscriptModeSymbolOnlyAtRight() {
        return !this.hasSuperscriptModeSymbolAtLeft && this.hasSuperscriptModeSymbolAtRight;
    }
    get betweenSuperscriptModeSymbols() {
        return this.hasSuperscriptModeSymbolAtLeft && this.hasSuperscriptModeSymbolAtRight;
    }

    // Subscript
    get hasSubscriptModeSymbolAtLeft() {
        return this.last?.isSubScriptModeSymbol ?? false;
    }
    get hasSubscriptModeSymbolAtRight() {
        return this.right?.isSubScriptModeSymbol ?? false;
    }
    get hasSubscriptModeSymbolOnlyAtLeft() {
        return this.hasSubscriptModeSymbolAtLeft && !this.hasSubscriptModeSymbolAtRight;
    }
    get hasSubscriptModeSymbolOnlyAtRight() {
        return !this.hasSubscriptModeSymbolAtLeft && this.hasSubscriptModeSymbolAtRight;
    }
    get betweenSubscriptModeSymbols() {
        return this.hasSubscriptModeSymbolAtLeft && this.hasSubscriptModeSymbolAtRight;
    }

    // Currency
    get hasCurrencyModeSymbolAtLeft() {
        return this.left?.isCurrencyModeSymbol ?? false;
    }
    get hasCurrencyModeSymbolAtRight() {
        return this.right?.isCurrencyModeSymbol ?? false;
    }
    get hasCurrencyModeSymbolOnlyAtLeft() {
        return this.hasCurrencyModeSymbolAtLeft && !this.hasCurrencyModeSymbolAtRight;
    }
    get hasCurrencyModeSymbolOnlyAtRight() {
        return !this.hasCurrencyModeSymbolAtLeft && this.hasCurrencyModeSymbolAtRight;
    }
    get betweenCurrencyModeSymbols() {
        return this.hasCurrencyModeSymbolAtLeft && this.hasCurrencyModeSymbolAtRight;
    }

    // Symbol
    get hasSymbolModeSymbolAtLeft() {
        return this.left?.isSymbolModeSymbol ?? false;
    }
    get hasSymbolModeSymbolAtRight() {
        return this.right?.isSymbolModeSymbol ?? false;
    }
    get hasSymbolModeSymbolOnlyAtLeft() {
        return this.hasSymbolModeSymbolAtLeft && !this.hasSymbolModeSymbolAtRight;
    }
    get hasSymbolModeSymbolOnlyAtRight() {
        return !this.hasSymbolModeSymbolAtLeft && this.hasSymbolModeSymbolAtRight;
    }
    get betweenSymbolModeSymbols() {
        return this.hasSymbolModeSymbolAtLeft && this.hasSymbolModeSymbolAtRight;
    }

    /* ========== Define properties: get position for under-mod symbol ========== */

    // Apostrophe
    get hasApostropheAtLeft() {
        return this.last?.isApostropheUnderModeSymbol ?? false;
    }
    get hasApostropheAtRight() {
        return this.next?.isApostropheUnderModeSymbol ?? false;
    }
    get hasApostropheOnlyAtLeft() {
        return this.hasApostropheAtLeft && !this.hasApostropheAtRight;
    }
    get hasApostropheOnlyAtRight() {
        return !this.hasApostropheAtLeft && this.hasApostropheAtRight;
    }
    get betweenApostrophes() {
        return this.hasApostropheAtLeft && this.hasApostropheAtRight;
    }

    // Accent Mark
    get hasAccentMarkAtLeft() {
        return this.last?.isAccentMarkUnderModeSymbol ?? false;
    }
    get hasAccentMarkAtRight() {
        return this.next?.isAccentMarkUnderModeSymbol ?? false;
    }
    get hasAccentMarkOnlyAtLeft() {
        return this.hasAccentMarkAtLeft && !this.hasAccentMarkAtRight;
    }
    get hasAccentMarkOnlyAtRight() {
        return !this.hasAccentMarkAtLeft && this.hasAccentMarkAtRight;
    }
    get betweenAccentMarks() {
        return this.hasAccentMarkAtLeft && this.hasAccentMarkAtRight;
    }

    // Emphasis
    get hasEmphasisAtLeft() {
        return this.last?.isEmphasisUnderModeSymbol ?? false;
    }
    get hasEmphasisAtRight() {
        return this.next?.isEmphasisUnderModeSymbol ?? false;
    }
    get hasEmphasisOnlyAtLeft() {
        return this.hasEmphasisAtLeft && !this.hasEmphasisAtRight;
    }
    get hasEmphasisOnlyAtRight() {
        return !this.hasEmphasisAtLeft && this.hasEmphasisAtRight;
    }
    get betweenEmphases() {
        return this.hasEmphasisAtLeft && this.hasEmphasisAtRight;
    }

    /* ========== Define properties: set right [under-] mod symbols ========== */

    // Mods
    set hasTraditionalNumberModeSymbolAtRight(bool) {
        if (this.hasTraditionalNumberModeSymbolAtRight) this._mod.TRADITIONAL_NUMBER = bool;
        return this.hasTraditionalNumberModeSymbolAtRight;
    }
    set hasAntoineNumberModeSymbolAtRight(bool) {
        if (this.hasAntoineNumberModeSymbolAtRight) this._mod.ANTOINE_NUMBER = bool;
        return this.hasAntoineNumberModeSymbolAtRight;
    }
    set hasLetterModeSymbolAtRight(bool) {
        if (this.hasLetterModeSymbolAtRight) this._mod.LETTER = bool;
        return this.hasLetterModeSymbolAtRight;
    }
    set hasCapitalModeSymbolAtRight(bool) {
        if (this.hasCapitalModeSymbolAtRight) this._mod.CAPITAL = bool;
        return this.hasCapitalModeSymbolAtRight;
    }
    set hasSuperscriptModeSymbolAtRight(bool) {
        if (this.hasSuperscriptModeSymbolAtRight) this._mod.SUPERSCRIPT = bool;
        return this.hasSuperscriptModeSymbolAtRight;
    }
    set hasSubscriptModeSymbolAtRight(bool) {
        if (this.hasSubscriptModeSymbolAtRight) this._mod.SUBSCRIPT = bool;
        return this.hasSubscriptModeSymbolAtRight;
    }
    set hasCurrencyModeSymbolAtRight(bool) {
        if (this.hasCurrencyModeSymbolAtRight) this._mod.CURRENCY = bool;
        return this.hasCurrencyModeSymbolAtRight;
    }
    set hasSymbolModeSymbolAtRight(bool) {
        if (this.hasSymbolModeSymbolAtRight) this._mod.SYMBOL = bool;
        return this.hasSymbolModeSymbolAtRight;
    }

    // Under-mods
    set hasApostropheAtRight(bool) {
        if (this.hasApostropheAtRight) this._mod.APOSTROPHE = bool;
        return this.hasApostropheAtRight;
    }
    set hasAccentMarkAtRight(bool) {
        if (this.hasAccentMarkAtRight) this._mod.ACCENT_MARK = bool;
        return this.hasAccentMarkAtRight;
    }
    set hasEmphasisAtRight(bool) {
        if (this.hasEmphasisAtRight) this._mod.EMPHASIS = bool;
        return this.hasEmphasisAtRight;
    }

    /* ========== Define properties: on mod ========== */

    // Global mods
    get onGlobalTraditionalNumberMode() {
        if (this.isTraditionalNumberModeSymbol) {
            return this.last?._mod?.TRADITIONAL_NUMBER ?? true;
        } else if (this.isLetterModeSymbol || !(this.isNumberSymbol || this.isDotNumberSymbol || this.isMathSignSymbol)) {
            return false;
        } else {
            return this.last?.onGlobalTraditionalNumberMode ?? false;
        }
    }
    get onGlobalAntoineNumberMode() {
        if (this.isAntoineNumberModeSymbol) {
            return this.last?._mod?.ANTOINE_NUMBER ?? true;
        } else if (this.isLetterModeSymbol || !(this.isAntoineNumberSymbol || this.isDotNumberSymbol || this.isMathSignSymbol)) {
            return false;
        } else {
            return this.last?.onGlobalAntoineNumberMode ?? false;
        }
    }
    get onGlobalLetterMode() {
        if (this.isLetterModeSymbol) {
            return this.last?._mod?.LETTER ?? true;
        } else if (this.isSpaceSymbol) {
            return false;
        } else {
            return this.last?.onGlobalLetterMode ?? false;
        }
    }
    get onGlobalCapitalMode() {
        if (this.isCapitalModeSymbol && this.next?.isCapitalModeSymbol && !this.last?.onGlobalCapitalMode) {
            return this.last?._mod?.CAPITAL ?? true;
        } else if (this.isSpaceSymbol || this.isHyphenSymbol || (this.next && this.next.onCapitalMode && this.next.isApostropheUnderModeSymbol)) {
            return false;
        } else {
            return this.last?.onGlobalCapitalMode ?? false;
        }
    }

    // Global Under-mods
    get onGlobalEmphasisMode() {
        if (this.isEmphasisUnderModeSymbol) {
            return this.last?._mod?.EMPHASIS ?? true;
        } else if (this.isSpaceSymbol || this.isHyphenSymbol || (this.next && this.next.onCapitalMode && this.next.isApostropheUnderModeSymbol)) {
            return false;
        } else {
            return this.last?.onGlobalEmphasisMode ?? false;
        }
    }
    get onSuperGlobalEmphasisMode() {
        if (this.isEmphasisUnderModeSymbol && this.next?.isEmphasisUnderModeSymbol && !this.last?.onSuperGlobalEmphasisMode) {
            return this.last?._mod?.EMPHASIS ?? true;
        } else if ((this.isEmphasisUnderModeSymbol && this.isLetterSymbol) || (this.next && this.next.onCapitalMode && this.next.isApostropheUnderModeSymbol)) {
            return false;
        } else {
            return this.last?.onSuperGlobalEmphasisMode ?? false;
        }
    }

    // Local mods
    get onTraditionalNumberMode() {
        return this.last?._mod?.TRADITIONAL_NUMBER ?? this.last?.isTraditionalNumberModeSymbol ?? false;
    }
    get onAntoineNumberMode() {
        return this.last?._mod?.ANTOINE_NUMBER ?? this.last?.isAntoineNumberModeSymbol ?? false;
    }
    get onLetterMode() {
        return this.last?._mod?.LETTER ?? this.last?.isLetterModeSymbol ?? false;
    }
    get onCapitalMode() {
        return this.last?._mod?.CAPITAL ?? this.last?.isCapitalModeSymbol ?? false;
    }
    get onSuperscriptMode() {
        return this.last?._mod?.SUPERSCRIPT ?? this.last?.isSuperscriptModeSymbol ?? false;
    }
    get onSubscriptMode() {
        return this.last?._mod?.SUBSCRIPT ?? this.last?.isSubscriptModeSymbol ?? false;
    }
    get onCurrencyMode() {
        return this.last?._mod?.CURRENCY ?? this.last?.isCurrencyModeSymbol ?? false;
    }
    get onSymbolMode() {
        return this.last?._mod?.SYMBOL ?? this.last?.isSymbolModeSymbol ?? false;
    }

    // Local Under-mods
    get onApostropheUnderMode() {
        return this.last?._mod?.APOSTROPHE ?? this.left?.isApostropheUnderModeSymbol ?? false;
    }
    get onAccentMarkUnderMode() {
        return this.last?._mod?.ACCENT_MARK ?? this.left?.isAccentMarkUnderModeSymbol ?? false;
    }
    get onEmphasisMode() {
        return this.last?._mod?.EMPHASIS ?? this.last?.isEmphasisUnderModeSymbol ?? false;
    }

    // Local mix-mods
    get onAnyMode() {
        return this.onTraditionalNumberMode || this.onAntoineNumberMode || this.onLetterMode || this.onCapitalMode || this.onSuperscriptMode || this.onSubscriptMode || this.onCurrencyMode || this.onSymbolMode;
    }
}


class LinkedBrailleSymbol extends Linked {
    #lang; #type;
    constructor(char, language='en', type='DEFAULT', {autocorrect=true, shorten_syllables=true, shorten_words=true, advanced=false}, debug=(()=>'')) {
        super();
        this.#lang = language.toLowerCase();
        this.#type = type.toUpperCase();
        if (!ENCODER[this.#lang]?.[this.#type]) {
            throw new TypeError('Incorrect language or type entered');
        };

        this.char = char;
        this._adv = advanced;
        this._ac = autocorrect;
        this._ss = shorten_syllables;
        this._sw = shorten_words;
        this._debug = debug;
    }

    // Set side braille symbols
    setPair(left=null, right=null) {
        this.last = left;
        this.next = right;
        return this;
    }

    // Get symbol
    symbol() {
        return ENCODER[this.#lang][this.#type][this.char].call(this) ?? (this._debug(this.char));
    }

    /*   Define chars   */

    // Types of symbols
    get isSpaceSymbol() {
        return this.char == '⠀' || /^\s$/.test(this.char);
    }
    get isNumberSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.TRADITIONAL_NUMBERS ?? ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚']).includes(this.char);
    }
    get isAntoineNumberSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.ANTOINE_NUMBERS ?? ['⠬', '⠡', '⠣', '⠩', '⠹', '⠱', '⠫', '⠻', '⠳', '⠪']).includes(this.char);
    }
    get isDotNumberSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.DECIMAL_POINT ?? '') == this.char;
    }
    get isMathSignSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.MATH_SIGNS ?? []).includes(this.char);
    }
    get isLetterSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.LETTERS ?? []).includes(this.char);
    }
    get isHyphenSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.HYPHEN ?? '') == this.char;
    }
    get isPunctuationMarkSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.PUNCTUATION_MARKS ?? []).includes(this.char);
    }

    // Mod symbols
    get isTraditionalNumberModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.TRADITIONAL_NUMBER ?? '⠼') == this.char;
    }
    get isAntoineNumberModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.ANTOINE_NUMBER ?? '') == this.char;
    }
    get isLetterModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.LETTER ?? '') == this.char;
    }
    get isCapitalModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.CAPITAL ?? '') == this.char;
    }
    get isSuperscriptModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.SUPERSCRIPT ?? '') == this.char;
    }
    get isSubscriptModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.SUBSCRIPT ?? '') == this.char;
    }
    get isCurrencyModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.CURRENCY ?? '') == this.char;
    }
    get isSymbolModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.MODE?.SYMBOL ?? '') == this.char;
    }

    // Under-mod symbols
    get isApostropheUnderModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.APOSTROPHE ?? '') == this.char;
    }
    get isAccentMarkUnderModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.ACCENT_MARK ?? '') == this.char;
    }
    get isEmphasisUnderModeSymbol() {
        return (ENCODER[this.#lang][this.#type][UNITS]?.ANY?.EMPHASIS ?? '') == this.char;
    }
}


class MinimumLinkedLettersWord extends Linked {
    constructor(word) {
        super();
        this.word = word;
    }

    // Define words
    get isSpaceSymbol() {
        return /\S/.test(this.word);
    }
    get isNumberSymbol() {
        return /^\d+$/.test(this.word);
    }
    get isDotNumberSymbol() {
        return this.last.isNumberSymbol && this.next.isNumberSymbol && /^[\.,]$/.test(this.word);
    }
}


class LinkedLettersWord extends MinimumLinkedLettersWord {
    #lang; #type;
    constructor(word, language='en', type='DEFAULT', {autocorrect=true, shorten_syllables=false, shorten_words=false, advanced=false}, debug=(()=>'')) {
        super(word);
        this.#lang = language.toLowerCase();
        this.#type = type.toUpperCase();
        if (!ENCODER[this.#lang]?.[this.#type]) {
            throw new TypeError('Incorrect language or type entered');
        };
        this._adv = advanced;
        this._ac = autocorrect;
        this._ss = shorten_syllables;
        this._sw = shorten_words;
        this._debug = debug;
    }

    // Set side latin words || symbols
    setPair(left=null, right=null) {
        this.last = left;
        this.next = right;
        return this;
    }

    // Get symbol
    symbol() {
        return ENCODER[this.#lang][this.#type][this.char].call(this) ?? (this._debug(this.char));
    }
}


class Braille {
    /**
     * encode
     * @param {String} braille_text text
     * @param {String} language language code, ex: 'en'
     * @param {Object} options { autocorrect, shorten_syllables, shorten_words, advanced }
     * @returns letters text
     */
    static encode(braille_text, language='en', type='DEFAULT', options={}, debug=(()=>'')) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        const list = Array.from(braille_text, v => new LinkedBrailleSymbol(v, language, type, options, debug));
        
        list.map((v, i) => v.setPair(list[i-1], list[i+1]));
        return list.map(v => v.symbol()).join('');
    }

    /**
     * decode
     * @param {String} letters_text text
     * @param {String} language language code, ex: 'en'
     * @param {Object} options { autocorrect, shorten_syllables, shorten_words, advanced }
     * @returns braille text
     */
    static decode(letters_text, language='en', type='DEFAULT', options={}, debug=(()=>'')) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        let list = [];
        if (!options.shorten_syllables && !options.shorten_words) {
            list = Array.from(letters_text, v => new LinkedLettersWord(v, language, type, options, debug));
        } else {
            for (let j, i = 0; i < letters_text.length; i+=(j||1)) {
                for (j = options.shorten_words ? 9 : 3; j > 0; j--) {
                    let word = letters_text.slice(i, i+j);

                    if (ALL_WORDS[language].includes(word)) {
                        let letters_word = new LinkedLettersWord(word, language, type, options, debug).setPair(
                            list.at(-1), new MinimumLinkedLettersWord(letters_text[i+j])
                        );
                        if (letters_word.symbol()) {
                            list.push(letters_word);
                            break;
                        }
                    } else if (word.length == 1) {
                        list.push(new LinkedLettersWord(word, language, type, options, debug));
                        break;
                    }
                }
            }
        }
        let pairList = list.map((v, i) => v.setPair(list[i-1], list[i+1]));
        return pairList.map(v => v.symbol()).join('');
    }
}


res = Braille.encode('⠨⠠⠓⠕⠕⠤⠗⠁⠽');
console.log( res );
