const ALL_WORDS = {
    'en': [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'but', 'can', 'do', 'every', 'from', 'go', 'have', 'just', 'knowledge', 'like', 'more', 'not', 'people', 'quite', 'rather', 'so', 'that', 'us', 'very', 'it', 'you', 'as', 'and', 'for', 'of', 'the', 'with', 'ch', 'gh', 'sh', 'th', 'wh', 'ed', 'er', 'ou', 'ow', 'will', 'ea', 'bb', 'cc', 'dis', 'en', 'to', 'gg', 'his', 'in', 'was', 'st', 'ing', 'ble', 'ar', 'com', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
    'ru': [' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', ';', ':', '.', '!', '(', ')', '«', '»', '/', '#', "'", '-'],
}


const ENCODER = {
    'en': {
        '⠁': () => this.hasActiveNumericMode ? '1' : this.hasActiveShiftMode ? 'A' : 'a',
        '⠃': () => this.hasActiveNumericMode ? '2' : this.hasActiveShiftMode ? 'B' : this._sw && this.betweenSpaces ? 'but'   : 'b',
        '⠉': () => this.hasActiveNumericMode ? '3' : this.hasActiveShiftMode ? 'C' : this._sw && this.betweenSpaces ? 'can'   : 'c',
        '⠙': () => this.hasActiveNumericMode ? '4' : this.hasActiveShiftMode ? 'D' : this._sw && this.betweenSpaces ? 'do'    : 'd',
        '⠑': () => this.hasActiveNumericMode ? '5' : this.hasActiveShiftMode ? 'E' : this._sw && this.betweenSpaces ? 'every' : 'e',
        '⠋': () => this.hasActiveNumericMode ? '6' : this.hasActiveShiftMode ? 'F' : this._sw && this.betweenSpaces ? 'from'  : 'f',
        '⠛': () => this.hasActiveNumericMode ? '7' : this.hasActiveShiftMode ? 'G' : this._sw && this.betweenSpaces ? 'go'    : 'g',
        '⠓': () => this.hasActiveNumericMode ? '8' : this.hasActiveShiftMode ? 'H' : this._sw && this.betweenSpaces ? 'have'  : 'h',
        '⠊': () => this.hasActiveNumericMode ? '9' : this.hasActiveShiftMode ? 'I' : 'i',
        '⠚': () => this.hasActiveNumericMode ? '0' : this.hasActiveShiftMode ? 'J' : this._sw && this.betweenSpaces ? 'just'  : 'j',
        '⠅': () => this.hasActiveShiftMode ? 'K' : this._sw && this.betweenSpaces ? 'knowledge' : 'k',
        '⠇': () => this.hasActiveShiftMode ? 'L' : this._sw && this.betweenSpaces ? 'like'      : 'l',
        '⠍': () => this.hasActiveShiftMode ? 'M' : this._sw && this.betweenSpaces ? 'more'      : 'm',
        '⠝': () => this.hasActiveShiftMode ? 'N' : this._sw && this.betweenSpaces ? 'not'       : 'n',
        '⠕': () => this.hasActiveShiftMode ? 'O' : 'o',
        '⠏': () => this.hasActiveShiftMode ? 'P' : this._sw && this.betweenSpaces ? 'people'    : 'p',
        '⠟': () => this.hasActiveShiftMode ? 'Q' : this._sw && this.betweenSpaces ? 'quite'     : 'q',
        '⠗': () => this.hasActiveShiftMode ? 'R' : this._sw && this.betweenSpaces ? 'rather'    : 'r',
        '⠎': () => this.hasActiveShiftMode ? 'S' : this._sw && this.betweenSpaces ? 'so'        : 's',
        '⠞': () => this.hasActiveShiftMode ? 'T' : this._sw && this.betweenSpaces ? 'that'      : 't',
        '⠥': () => this.hasActiveShiftMode ? 'U' : this._sw && this.betweenSpaces ? 'us'        : 'u',
        '⠧': () => this.hasActiveShiftMode ? 'V' : this._sw && this.betweenSpaces ? 'very'      : 'v',
        '⠺': () => this.hasActiveShiftMode ? 'W' : this._sw && this.betweenSpaces ? 'will'      : 'w',
        '⠭': () => this.hasActiveShiftMode ? 'X' : this._sw && this.betweenSpaces ? 'it'        : 'x',
        '⠽': () => this.hasActiveShiftMode ? 'Y' : this._sw && this.betweenSpaces ? 'you'       : 'y',
        '⠵': () => this.hasActiveShiftMode ? 'Z' : this._sw && this.betweenSpaces ? 'as'        : 'z',
        '⠯': () => this._sw && this.betweenSpaces ? 'and'  : undefined,
        '⠿': () => this._sw && this.betweenSpaces ? 'for'  : undefined,
        '⠷': () => this._sw && this.betweenSpaces ? 'of'   : undefined,
        '⠮': () => this._sw && this.betweenSpaces ? 'the'  : undefined,
        '⠾': () => this._sw && this.betweenSpaces ? 'with' : undefined,
        '⠡': () => this._ss ? 'ch' : undefined,
        '⠣': () => this._ss ? 'gh' : undefined,
        '⠩': () => this._ss ? 'sh' : undefined,
        '⠹': () => this._ss ? 'th' : undefined,
        '⠱': () => this._ss ? 'wh' : undefined,
        '⠫': () => this._ss ? 'ed' : undefined,
        '⠻': () => this._ss ? 'er' : undefined,
        '⠳': () => this._ss ? 'ou' : undefined,
        '⠪': () => this._ss ? 'ow' : undefined,
        '⠂': () => this._adv && !this.hasSpaceAtRight               ? 'ea'  : ',',
        '⠆': () => this._adv && !this.hasSpaceAtRight               ? 'bb'  : ';',
        '⠒': () => this._adv && !this.hasSpaceAtRight               ? 'cc'  : ':',
        '⠲': () => this._adv && !this.hasSpaceAtRight               ? 'dis' : '.',
        '⠢': () => this._adv && !this.hasSpaceAtRight               ? 'en'  : '?',
        '⠖': () => this._adv && !this.hasSpaceAtRight               ? 'to'  : '!',
        '⠶': () => this._adv && !this.betweenSpaces                 ? 'gg'  : this.hasSpaceAtLeft ? '(' : this.hasSpaceAtRight ? ')' : '()',
        '⠦': () => this._adv && !this.hasSpaceOnlyAtLeft            ? 'his' : '«',
        '⠔': () => this._adv                                        ? 'in'  : undefined,
        '⠴': () => this._adv && !this.hasSpaceOnlyAtRight           ? 'was' : '»',
        '⠌': () => this._adv && !this.betweenSpaces                 ? 'st'  : '/',
        '⠬': () => this._adv                                        ? 'ing' : undefined,
        '⠼': () => this.hasSpaceOnlyAtLeft && this.hasNumberAtRight ? '#'   : this.betweenSpaces ? '#' : 'ble',
        '⠜': () => this._adv                                        ? 'ar'  : undefined,
        '⠤': () => this._adv && !this.betweenSpaces                 ? 'com' : '-',  // TODO: needs upgrading
        '⠄': () => "'",
        '⠈': () => '`',
        '⠘': () => undefined,
        '⠸': () => undefined,
        '⠐': () => undefined,
        '⠨': () => this.betweenNumbers && this.hasActiveNumericMode ? ',' : '\u0340',
        '⠰': () => undefined,
        '⠠': () => undefined,
        ' ': () => ' ',
    },
    'ru': {
        '⠁': () => this.hasActiveNumericMode ? '1' : this.hasActiveShiftMode ? 'А' : 'а',
        '⠃': () => this.hasActiveNumericMode ? '2' : this.hasActiveShiftMode ? 'Б' : 'б',
        '⠉': () => this.hasActiveNumericMode ? '3' : this.hasActiveShiftMode ? 'Ц' : 'ц',
        '⠙': () => this.hasActiveNumericMode ? '4' : this.hasActiveShiftMode ? 'Д' : 'д',
        '⠑': () => this.hasActiveNumericMode ? '5' : this.hasActiveShiftMode ? 'Е' : 'е',
        '⠋': () => this.hasActiveNumericMode ? '6' : this.hasActiveShiftMode ? 'Ф' : 'ф',
        '⠛': () => this.hasActiveNumericMode ? '7' : this.hasActiveShiftMode ? 'Г' : 'г',
        '⠓': () => this.hasActiveNumericMode ? '8' : this.hasActiveShiftMode ? 'Х' : 'х',
        '⠊': () => this.hasActiveNumericMode ? '9' : this.hasActiveShiftMode ? 'И' : 'и',
        '⠚': () => this.hasActiveNumericMode ? '0' : this.hasActiveShiftMode ? 'Ж' : 'ж',
        '⠅': () => this.hasActiveShiftMode ? 'К' : 'к',
        '⠇': () => this.hasActiveShiftMode ? 'Л' : 'л',
        '⠍': () => this.hasActiveShiftMode ? 'М' : 'м',
        '⠝': () => this.hasActiveShiftMode ? 'Н' : 'н',
        '⠕': () => this.hasActiveShiftMode ? 'О' : 'о',
        '⠏': () => this.hasActiveShiftMode ? 'П' : 'п',
        '⠟': () => this.hasActiveShiftMode ? 'Ч' : 'ч',
        '⠗': () => this.hasActiveShiftMode ? 'Р' : 'р',
        '⠎': () => this.hasActiveShiftMode ? 'С' : 'с',
        '⠞': () => this.hasActiveShiftMode ? 'Т' : 'т',
        '⠥': () => this.hasActiveShiftMode ? 'У' : 'У',
        '⠧': () => undefined,
        '⠺': () => this.hasActiveShiftMode ? 'В' : 'в',
        '⠭': () => this.hasActiveShiftMode ? 'Щ' : 'щ',
        '⠽': () => undefined,
        '⠵': () => this.hasActiveShiftMode ? 'З' : 'з',
        '⠯': () => this.hasActiveShiftMode ? 'Й' : 'й',
        '⠿': () => undefined,
        '⠷': () => this.hasActiveShiftMode ? 'Ъ' : 'ъ',
        '⠮': () => this.hasActiveShiftMode ? 'Ы' : 'ы',
        '⠾': () => this.hasActiveShiftMode ? 'Ь' : 'ь',
        '⠡': () => this.hasActiveShiftMode ? 'Ё' : 'ё',
        '⠣': () => '(',
        '⠩': () => undefined,
        '⠹': () => undefined,
        '⠱': () => this.hasActiveShiftMode ? 'Ш' : 'ш',
        '⠫': () => this.hasActiveShiftMode ? 'Я' : 'я',
        '⠻': () => undefined,
        '⠳': () => this.hasActiveShiftMode ? 'Ю' : 'ю',
        '⠪': () => this.hasActiveShiftMode ? 'Э' : 'э',
        '⠂': () => ',',
        '⠆': () => ';',
        '⠒': () => ':',
        '⠲': () => '.',
        '⠢': () => '?',
        '⠖': () => '!',
        '⠶': () => undefined,
        '⠦': () => '«',
        '⠔': () => undefined,
        '⠴': () => '»',
        '⠌': () => '/',
        '⠬': () => undefined,
        '⠼': () => this.hasSpaceOnlyAtLeft && this.hasNumberAtRight ? '#'   : this.betweenSpaces ? '#' : 'ble',
        '⠜': () => ')',
        '⠄': () => "'",
        '⠤': () => this._adv && !this.betweenSpaces                 ? 'com' : '-',  // TODO: needs upgrading
        '⠈': () => '`',
        '⠘': () => undefined,
        '⠸': () => undefined,
        '⠐': () => undefined,
        '⠨': () => this.betweenNumbers && this.hasActiveNumericMode ? ',' : '\u0340',
        '⠰': () => undefined,
        '⠠': () => undefined,
        ' ': () => ' ',
    }
}
const DECODER = {
    'en': {
        'a': () => '⠁',
        'c': () => '⠉',
        'b': () => '⠃',
        'd': () => '⠙',
        'e': () => '⠑',
        'f': () => '⠋',
        'g': () => '⠛',
        'h': () => '⠓',
        'i': () => '⠊',
        'j': () => '⠚',
        'k': () => '⠅',
        'l': () => '⠇',
        'm': () => '⠍',
        'n': () => '⠝',
        'o': () => '⠕',
        'p': () => '⠏',
        'q': () => '⠟',
        'r': () => '⠗',
        's': () => '⠎',
        't': () => '⠞',
        'u': () => '⠥',
        'v': () => '⠧',
        'w': () => !this.betweenSpaces ? '⠺' : undefined,
        'x': () => '⠭',
        'y': () => '⠽',
        'z': () => '⠵',
        'A': () => '⠠⠁',
        'B': () => '⠠⠃',
        'C': () => '⠠⠉',
        'D': () => '⠠⠙',
        'E': () => '⠠⠑',
        'F': () => '⠠⠋',
        'G': () => '⠠⠛',
        'H': () => '⠠⠓',
        'I': () => '⠠⠊',
        'J': () => '⠠⠚',
        'K': () => '⠠⠅',
        'L': () => '⠠⠇',
        'M': () => '⠠⠍',
        'N': () => '⠠⠝',
        'O': () => '⠠⠕',
        'P': () => '⠠⠏',
        'Q': () => '⠠⠟',
        'R': () => '⠠⠗',
        'S': () => '⠠⠎',
        'T': () => '⠠⠞',
        'U': () => '⠠⠥',
        'V': () => '⠠⠧',
        'W': () => '⠠⠺',
        'X': () => '⠠⠭',
        'Y': () => '⠠⠽',
        'Z': () => '⠠⠵',
        'but'      : () => this.betweenSpaces && this._sw ? '⠃' : undefined,
        'can'      : () => this.betweenSpaces && this._sw ? '⠉' : undefined,
        'do'       : () => this.betweenSpaces && this._sw ? '⠙' : undefined,
        'every'    : () => this.betweenSpaces && this._sw ? '⠑' : undefined,
        'from'     : () => this.betweenSpaces && this._sw ? '⠋' : undefined,
        'go'       : () => this.betweenSpaces && this._sw ? '⠛' : undefined,
        'have'     : () => this.betweenSpaces && this._sw ? '⠓' : undefined,
        'just'     : () => this.betweenSpaces && this._sw ? '⠚' : undefined,
        'knowledge': () => this.betweenSpaces && this._sw ? '⠅' : undefined,
        'like'     : () => this.betweenSpaces && this._sw ? '⠇' : undefined,
        'more'     : () => this.betweenSpaces && this._sw ? '⠍' : undefined,
        'not'      : () => this.betweenSpaces && this._sw ? '⠝' : undefined,
        'people'   : () => this.betweenSpaces && this._sw ? '⠏' : undefined,
        'quite'    : () => this.betweenSpaces && this._sw ? '⠏' : undefined,
        'rather'   : () => this.betweenSpaces && this._sw ? '⠗' : undefined,
        'so'       : () => this.betweenSpaces && this._sw ? '⠎' : undefined,
        'that'     : () => this.betweenSpaces && this._sw ? '⠞' : undefined,
        'us'       : () => this.betweenSpaces && this._sw ? '⠥' : undefined,
        'very'     : () => this.betweenSpaces && this._sw ? '⠧' : undefined,
        'it'       : () => this.betweenSpaces && this._sw ? '⠭' : undefined,
        'you'      : () => this.betweenSpaces && this._sw ? '⠽' : undefined,
        'as'       : () => this.betweenSpaces && this._sw ? '⠵' : undefined,
        'and'      : () => this.betweenSpaces && this._sw ? '⠯' : undefined,
        'for'      : () => this.betweenSpaces && this._sw ? '⠿' : undefined,
        'of'       : () => this.betweenSpaces && this._sw ? '⠷' : undefined,
        'the'      : () => this.betweenSpaces && this._sw ? '⠮' : undefined,
        'with'     : () => this.betweenSpaces && this._sw ? '⠾' : undefined,
        'ch'  : () => this._ss ? '⠡' : undefined,
        'gh'  : () => this._ss ? '⠣' : undefined,
        'sh'  : () => this._ss ? '⠩' : undefined,
        'th'  : () => this._ss ? '⠹' : undefined,
        'wh'  : () => this._ss ? '⠱' : undefined,
        'ed'  : () => this._ss ? '⠫' : undefined,
        'er'  : () => this._ss ? '⠻' : undefined,
        'ou'  : () => this._ss ? '⠳' : undefined,
        'ow'  : () => this._ss ? '⠪' : undefined,
        'will': () => this._sw &&  this.betweenSpaces   ? '⠺' : undefined,
        'ea'  : () => this._ss && !this.hasSpaceAtRight ? '⠂' : undefined,
        'bb'  : () => this._ss && !this.hasSpaceAtRight ? '⠆' : undefined,
        'cc'  : () => this._ss && !this.hasSpaceAtRight ? '⠒' : undefined,
        'dis' : () => this._ss && !this.hasSpaceAtRight ? '⠲' : undefined,
        'en'  : () => '⠢',
        'to'  : () => !this.hasSpaceOnlyAtRight && this._ss ? '⠖' : this.betweenSpaces && this._sw ? '⠖' : undefined,  // TODO: needs upgrading
        'gg'  : () => !this.hasSpaceAtLeft && !this.hasSpaceAtRight && this._ss ? '⠶' : undefined,
        'his' : () => !this.hasSpaceOnlyAtLeft && ((!this.betweenSpaces && this._ss) || this._sw) ? '⠦' : undefined,
        'in'  : () => ((!this.betweenSpaces && this._ss) || this._sw) ? '⠔' : undefined,
        'was' : () => !this.hasSpaceOnlyAtRight && ((!this.betweenSpaces && this._ss) || this._sw) ? '⠴' : undefined,
        'st'  : () => !this.betweenSpaces && this._ss ? '⠌' : undefined,
        'ing' : () => this._ss ? '⠬' : undefined,
        'ble' : () => ((!this.hasSpaceOnlyAtLeft || !this.hasNumberAtRight) || !this.betweenSpaces) && this._ss ? '⠼' :  undefined,
        'ar'  : () => this._ss ? '⠜' : undefined,
        'com' : () => !this.betweenSpaces && this._ss ? '⠤' : undefined,
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
        '(': () => (this.hasSpaceAtLeft ? '' : '⠀') + '⠶',
        ')': () => !this.hasSpaceAtLeft ? '⠶' + (this.hasSpaceAtRight ? '' : '⠀') : undefined,
        '«': () => !this.hasSpaceAtRight ? (this.hasSpaceAtLeft ? '' : '⠀') + '⠦' : undefined,
        '»': () => !this.hasSpaceAtLeft ? '⠴' + (this.hasSpaceAtRight ? '' : '⠀') : undefined,
        '/': () => this.betweenSpaces ? '⠌' : undefined,
        '#': () => this.betweenSpaces ? '⠼' : undefined,
        "'": () => '⠄',
        '-': () => this.betweenSpaces ? '⠤' : undefined,
        ' ': () => ' ',
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
        if (this.isEnableNumbericSymbol) {
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
        return this.char === '⠀' || /\S/.test(this.char);
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
        return ['⠁', '⠃', '⠉', '⠙', '⠑', '⠋', '⠛', '⠓', '⠊', '⠚'].some(v === this.char);
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
        return this.last.isNumberSymbol && this.next.isNumberSymbol && /^[\.,]\d+/.test(this.word);
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
    static encode(braille_text, language='en', options, debug=false) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        let list = Array.from(braille_text, v => new LinkedBrailleSymbol(v, language, options, debug));
        
        let pairList = list.map((v, i) => v.setPair(list[i-1], list[i+1]));
        return pairList.map(v => v.symbol).join('');
    }

    /**
     * decode
     * @param {String} letters_text text
     * @param {String} language language code, ex: 'en'
     * @param {Object} options { autocorrect, shorten_syllables, shorten_words, advanced }
     * @returns braille text
     */
    static decode(letters_text, language='en', options, debug=false) {
        if (!ALL_WORDS[language]) throw ReferenceError('Invalid language code');

        let list = [];
        if (!options.shorten_syllables && !options.shorten_words) {
            list = Array.from(letters_text, v => new LinkedLettersWord(v, language, options, debug));
        } else {
            for (let j, i = 0; i < letters_text.length; i+=j) {
                for (j = options.shorten_words ? 9 : 3; j > 0; j--) {
                    let word = letters_text.slice(i, i+j+1);

                    if (ALL_WORDS[language].includes(word)) {
                        let latin_word = new LinkedLettersWord(word, language, options, debug).setPair(
                            list.at(-1), new MinimumLinkedLettersWord(letters_text[i+j])
                        );
                        if (latin_word.symbol) {
                            list.push(latin_word);
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
