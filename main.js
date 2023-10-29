const ALL_WORDS = {
    'en': [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'but', 'can', 'do', 'every', 'from', 'go', 'have', 'just', 'knowledge', 'like', 'more', 'not', 'people', 'quite', 'rather', 'so', 'that', 'us', 'very', 'it', 'you', 'as', 'and', 'for', 'of', 'the', 'with', 'ch', 'gh', 'sh', 'th', 'wh', 'ed', 'er', 'ou', 'ow', 'will', 'ea', 'bb', 'cc', 'dis', 'en', 'to', 'gg', 'his', 'in', 'was', 'st', 'ing', 'ble', 'ar', 'com', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
    'ru': [' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
}


const ENCODER = {
    'en': {
            '⠁': function() { return this.hasActiveNumericMode ? '1' : this.hasActiveShiftMode ? 'A' : 'a'
        },  '⠃': function() { return this.hasActiveNumericMode ? '2' : this.hasActiveShiftMode ? 'B' : this._sw && this.betweenSpaces ? 'but'   : 'b'
        },  '⠉': function() { return this.hasActiveNumericMode ? '3' : this.hasActiveShiftMode ? 'C' : this._sw && this.betweenSpaces ? 'can'   : 'c'
        },  '⠙': function() { return this.hasActiveNumericMode ? '4' : this.hasActiveShiftMode ? 'D' : this._sw && this.betweenSpaces ? 'do'    : 'd'
        },  '⠑': function() { return this.hasActiveNumericMode ? '5' : this.hasActiveShiftMode ? 'E' : this._sw && this.betweenSpaces ? 'every' : 'e'
        },  '⠋': function() { return this.hasActiveNumericMode ? '6' : this.hasActiveShiftMode ? 'F' : this._sw && this.betweenSpaces ? 'from'  : 'f'
        },  '⠛': function() { return this.hasActiveNumericMode ? '7' : this.hasActiveShiftMode ? 'G' : this._sw && this.betweenSpaces ? 'go'    : 'g'
        },  '⠓': function() { return this.hasActiveNumericMode ? '8' : this.hasActiveShiftMode ? 'H' : this._sw && this.betweenSpaces ? 'have'  : 'h'
        },  '⠊': function() { return this.hasActiveNumericMode ? '9' : this.hasActiveShiftMode ? 'I' : 'i'
        },  '⠚': function() { return this.hasActiveNumericMode ? '0' : this.hasActiveShiftMode ? 'J' : this._sw && this.betweenSpaces ? 'just'  : 'j'
        },  '⠅': function() { return this.hasActiveShiftMode ? 'K' : this._sw && this.betweenSpaces ? 'knowledge' : 'k'
        },  '⠇': function() { return this.hasActiveShiftMode ? 'L' : this._sw && this.betweenSpaces ? 'like'      : 'l'
        },  '⠍': function() { return this.hasActiveShiftMode ? 'M' : this._sw && this.betweenSpaces ? 'more'      : 'm'
        },  '⠝': function() { return this.hasActiveShiftMode ? 'N' : this._sw && this.betweenSpaces ? 'not'       : 'n'
        },  '⠕': function() { return this.hasActiveShiftMode ? 'O' : 'o'
        },  '⠏': function() { return this.hasActiveShiftMode ? 'P' : this._sw && this.betweenSpaces ? 'people'    : 'p'
        },  '⠟': function() { return this.hasActiveShiftMode ? 'Q' : this._sw && this.betweenSpaces ? 'quite'     : 'q'
        },  '⠗': function() { return this.hasActiveShiftMode ? 'R' : this._sw && this.betweenSpaces ? 'rather'    : 'r'
        },  '⠎': function() { return this.hasActiveShiftMode ? 'S' : this._sw && this.betweenSpaces ? 'so'        : 's'
        },  '⠞': function() { return this.hasActiveShiftMode ? 'T' : this._sw && this.betweenSpaces ? 'that'      : 't'
        },  '⠥': function() { return this.hasActiveShiftMode ? 'U' : this._sw && this.betweenSpaces ? 'us'        : 'u'
        },  '⠧': function() { return this.hasActiveShiftMode ? 'V' : this._sw && this.betweenSpaces ? 'very'      : 'v'
        },  '⠺': function() { return this.hasActiveShiftMode ? 'W' : this._sw && this.betweenSpaces ? 'will'      : 'w'
        },  '⠭': function() { return this.hasActiveShiftMode ? 'X' : this._sw && this.betweenSpaces ? 'it'        : 'x'
        },  '⠽': function() { return this.hasActiveShiftMode ? 'Y' : this._sw && this.betweenSpaces ? 'you'       : 'y'
        },  '⠵': function() { return this.hasActiveShiftMode ? 'Z' : this._sw && this.betweenSpaces ? 'as'        : 'z'
        },  '⠯': function() { return this._sw && this.betweenSpaces ? 'and'  : undefined
        },  '⠿': function() { return this._sw && this.betweenSpaces ? 'for'  : undefined
        },  '⠷': function() { return this._sw && this.betweenSpaces ? 'of'   : undefined
        },  '⠮': function() { return this._sw && this.betweenSpaces ? 'the'  : undefined
        },  '⠾': function() { return this._sw && this.betweenSpaces ? 'with' : undefined
        },  '⠡': function() { return this._ss ? 'ch' : undefined
        },  '⠣': function() { return this._ss ? 'gh' : undefined
        },  '⠩': function() { return this._ss ? 'sh' : undefined
        },  '⠹': function() { return this._ss ? 'th' : undefined
        },  '⠱': function() { return this._ss ? 'wh' : undefined
        },  '⠫': function() { return this._ss ? 'ed' : undefined
        },  '⠻': function() { return this._ss ? 'er' : undefined
        },  '⠳': function() { return this._ss ? 'ou' : undefined
        },  '⠪': function() { return this._ss ? 'ow' : undefined
        },  '⠂': function() { return this._adv && !this.hasSpaceAtRight               ? 'ea'  : ','
        },  '⠆': function() { return this._adv && !this.hasSpaceAtRight               ? 'bb'  : ';'
        },  '⠒': function() { return this._adv && !this.hasSpaceAtRight               ? 'cc'  : ':'
        },  '⠲': function() { return this._adv && !this.hasSpaceAtRight               ? 'dis' : '.'
        },  '⠢': function() { return this._adv && !this.hasSpaceAtRight               ? 'en'  : '?'
        },  '⠖': function() { return this._adv && !this.hasSpaceAtRight               ? 'to'  : '!'
        },  '⠶': function() { return this._adv && !this.betweenSpaces                 ? 'gg'  : this.hasSpaceAtLeft ? '(' : this.hasSpaceAtRight ? ')' : '()'
        },  '⠦': function() { return this._adv && !this.hasSpaceOnlyAtLeft            ? 'his' : '«'
        },  '⠔': function() { return this._adv                                        ? 'in'  : undefined
        },  '⠴': function() { return this._adv && !this.hasSpaceOnlyAtRight           ? 'was' : '»'
        },  '⠌': function() { return this._adv && !this.betweenSpaces                 ? 'st'  : '/'
        },  '⠬': function() { return this._adv                                        ? 'ing' : undefined
        },  '⠼': function() { return this.hasSpaceOnlyAtLeft && this.hasNumberAtRight ? '#'   : this.betweenSpaces ? '#' : 'ble'
        },  '⠜': function() { return this._adv                                        ? 'ar'  : undefined
        },  '⠤': function() { return this._adv && !this.betweenSpaces                 ? 'com' : '-'
        },  '⠄': function() { return "'"
        },  '⠈': function() { return '`'
        },  '⠘': function() { return undefined
        },  '⠸': function() { return undefined
        },  '⠐': function() { return undefined
        },  '⠨': function() { return this.betweenNumbers && this.hasActiveNumericMode ? ',' : '\u0340'
        },  '⠰': function() { return undefined
        },  '⠠': function() { return undefined
        },  ' ': function() { return ' '
        },
    }, 
    'ru': {
            '⠁': function() { return this.hasActiveNumericMode ? '1' : this.hasActiveShiftMode ? 'А' : 'а'
        },  '⠃': function() { return this.hasActiveNumericMode ? '2' : this.hasActiveShiftMode ? 'Б' : 'б'
        },  '⠉': function() { return this.hasActiveNumericMode ? '3' : this.hasActiveShiftMode ? 'Ц' : 'ц'
        },  '⠙': function() { return this.hasActiveNumericMode ? '4' : this.hasActiveShiftMode ? 'Д' : 'д'
        },  '⠑': function() { return this.hasActiveNumericMode ? '5' : this.hasActiveShiftMode ? 'Е' : 'е'
        },  '⠋': function() { return this.hasActiveNumericMode ? '6' : this.hasActiveShiftMode ? 'Ф' : 'ф'
        },  '⠛': function() { return this.hasActiveNumericMode ? '7' : this.hasActiveShiftMode ? 'Г' : 'г'
        },  '⠓': function() { return this.hasActiveNumericMode ? '8' : this.hasActiveShiftMode ? 'Х' : 'х'
        },  '⠊': function() { return this.hasActiveNumericMode ? '9' : this.hasActiveShiftMode ? 'И' : 'и'
        },  '⠚': function() { return this.hasActiveNumericMode ? '0' : this.hasActiveShiftMode ? 'Ж' : 'ж'
        },  '⠅': function() { return this.hasActiveShiftMode ? 'К' : 'к'
        },  '⠇': function() { return this.hasActiveShiftMode ? 'Л' : 'л'
        },  '⠍': function() { return this.hasActiveShiftMode ? 'М' : 'м'
        },  '⠝': function() { return this.hasActiveShiftMode ? 'Н' : 'н'
        },  '⠕': function() { return this.hasActiveShiftMode ? 'О' : 'о'
        },  '⠏': function() { return this.hasActiveShiftMode ? 'П' : 'п'
        },  '⠟': function() { return this.hasActiveShiftMode ? 'Ч' : 'ч'
        },  '⠗': function() { return this.hasActiveShiftMode ? 'Р' : 'р'
        },  '⠎': function() { return this.hasActiveShiftMode ? 'С' : 'с'
        },  '⠞': function() { return this.hasActiveShiftMode ? 'Т' : 'т'
        },  '⠥': function() { return this.hasActiveShiftMode ? 'У' : 'У'
        },  '⠧': function() { return undefined
        },  '⠺': function() { return this.hasActiveShiftMode ? 'В' : 'в'
        },  '⠭': function() { return this.hasActiveShiftMode ? 'Щ' : 'щ'
        },  '⠽': function() { return undefined
        },  '⠵': function() { return this.hasActiveShiftMode ? 'З' : 'з'
        },  '⠯': function() { return this.hasActiveShiftMode ? 'Й' : 'й'
        },  '⠿': function() { return undefined
        },  '⠷': function() { return this.hasActiveShiftMode ? 'Ъ' : 'ъ'
        },  '⠮': function() { return this.hasActiveShiftMode ? 'Ы' : 'ы'
        },  '⠾': function() { return this.hasActiveShiftMode ? 'Ь' : 'ь'
        },  '⠡': function() { return this.hasActiveShiftMode ? 'Ё' : 'ё'
        },  '⠣': function() { return '('
        },  '⠩': function() { return undefined
        },  '⠹': function() { return undefined
        },  '⠱': function() { return this.hasActiveShiftMode ? 'Ш' : 'ш'
        },  '⠫': function() { return this.hasActiveShiftMode ? 'Я' : 'я'
        },  '⠻': function() { return undefined
        },  '⠳': function() { return this.hasActiveShiftMode ? 'Ю' : 'ю'
        },  '⠪': function() { return this.hasActiveShiftMode ? 'Э' : 'э'
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
        },  '⠌': function() { return '/'
        },  '⠬': function() { return undefined
        },  '⠼': function() { return this.hasSpaceOnlyAtLeft && this.hasNumberAtRight ? '#'   : this.betweenSpaces ? '#' : 'ble'
        },  '⠜': function() { return ')'
        },  '⠄': function() { return "'"
        },  '⠤': function() { return this._adv && !this.betweenSpaces                 ? 'com' : '-'
        },  '⠈': function() { return '`'
        },  '⠘': function() { return undefined
        },  '⠸': function() { return undefined
        },  '⠐': function() { return undefined
        },  '⠨': function() { return this.betweenNumbers && this.hasActiveNumericMode ? ',' : '\u0340'
        },  '⠰': function() { return undefined
        },  '⠠': function() { return undefined
        },  ' ': function() { return ' '
        },
    }
}
const DECODER = {
    'en': {
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
    'ru': {
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
    /*   Define chars (Interface)   */
    get isSpaceSymbol() {}
    get isNumberSymbol() {}
    get isDotNumberSymbol() {}
    get isEnableNumericSymbol() {}
    get isDisableNumericSymbol() {}
    get isShiftIndicationSymbol() {}

    /*   Define properties   */

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

    // Modes
    get hasActiveNumericMode() {
        if (this.isEnableNumericSymbol) {
            return true;
        } else if (this.isDisableNumericSymbol || !(this.isNumberSymbol || this.isDotNumberSymbol)) {
            return false;
        } else {
            return this.last?.hasActiveNumericMode ?? false;
        }
    }
    get hasActiveShiftMode() {
        return this.last?.isShiftIndicationSymbol ?? false;
    }
}


class LinkedBrailleSymbol extends Linked {
    #debug;
    constructor(char, language='en', {autocorrect=true, shorten_syllables=true, shorten_words=true, advanced=false}, debug=false) {
        super();
        this.char = char;
        this.lang = language;
        this._adv = advanced;
        this._ac = autocorrect;
        this._ss = shorten_syllables;
        this._sw = shorten_words;
        this.#debug = debug;
    }

    // Set side braille symbols
    setPair(left=null, right=null) {
        this.last = left;
        this.next = right;
        return this;
    }

    // Define chars
    get isSpaceSymbol() {
        return this.char === '⠀' || /^\s$/.test(this.char);
    }
    get isEnableNumericSymbol() {
        return this.char === '⠼' && this.hasSpaceOnlyAtLeft && this.hasNumberAtRight;
    }
    get isDisableNumericSymbol() {
        return this.char === '⠰';
    }
    get isShiftIndicationSymbol() {
        return {
            en: () => this.char === '⠠',
            ru: () => this.char === '⠐',
        }[this.lang]();
    }
    get isNumberSymbol() {
        return ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'].some(v => v === this.char);
    }

    // Get symbol
    get symbol() {
        return ENCODER[this.lang][this.char]?.call(this) ?? (this.#debug ? this.char : '');
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
    #debug;
    constructor(word, language='en', {autocorrect=true, shorten_syllables=true, shorten_words=true, advanced=false}, debug=false) {
        super(word);
        this.lang = language;
        this._adv = advanced;
        this._ac = autocorrect;
        this._ss = shorten_syllables;
        this._sw = shorten_words;
        this.#debug = debug;
    }

    // Set side latin words || symbols
    setPair(left=null, right=null) {
        this.last = left;
        this.next = right;
        return this;
    }

    // Get symbol
    get symbol() {
        return DECODER[this.lang][this.word]?.call(this) ?? (this.#debug ? this.word : '');
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
    static encode(braille_text, language='en', options={}, debug=false) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        const list = Array.from(braille_text, v => new LinkedBrailleSymbol(v, language, options, debug));
        
        list.map((v, i) => v.setPair(list[i-1], list[i+1]));
        return list.map(v => v.symbol).join('');
    }

    /**
     * decode
     * @param {String} letters_text text
     * @param {String} language language code, ex: 'en'
     * @param {Object} options { autocorrect, shorten_syllables, shorten_words, advanced }
     * @returns braille text
     */
    static decode(letters_text, language='en', options={}, debug=false) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        let list = [];
        if (!options.shorten_syllables && !options.shorten_words) {
            list = Array.from(letters_text, v => new LinkedLettersWord(v, language, options, debug));
        } else {
            for (let j, i = 0; i < letters_text.length; i+=(j||1)) {
                for (j = options.shorten_words ? 9 : 3; j > 0; j--) {
                    let word = letters_text.slice(i, i+j);

                    if (ALL_WORDS[language].includes(word)) {
                        let letters_word = new LinkedLettersWord(word, language, options, debug).setPair(
                            list.at(-1), new MinimumLinkedLettersWord(letters_text[i+j])
                        );
                        if (letters_word.symbol) {
                            list.push(letters_word);
                            break;
                        }
                    } else if (word.length == 1) {
                        list.push(new LinkedLettersWord(word, language, options, debug));
                        break;
                    }
                }
            }
        }
        let pairList = list.map((v, i) => v.setPair(list[i-1], list[i+1]));
        return pairList.map(v => v.symbol).join('');
    }
}
