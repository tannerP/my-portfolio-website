import { Injectable } from '@angular/core';


/*
 *  Morse Code Logic Class.
 *  Encode and decode english to Morse code.
 *  Created by Tanner Phan. 10/05/2017
 * */
@Injectable()
export class MorseCodeOperatorService {
  private og_file_text: string;
  private morse_alphabet;
  public file_data_encoded: string;
  public AUDIO_FILE;

  constructor() {
    this.morse_alphabet = {
      '0': {
        'telephonic': 'ZERO',
        'morseCode': '- - - - - -',
      },
      '1': {
        'telephonic': 'ONE',
        'morseCode': '. - - - - - -',
      },
      '2': {
        'telephonic': 'TWO',
        'morseCode': '. . - - - ',
      },
      '3': {
        'telephonic': 'THREE',
        'morseCode': '. . . - -',
      },
      '4': {
        'telephonic': 'FOUR',
        'morseCode': '. . . . - -',
      },
      '5': {
        'telephonic': 'FIVE',
        'morseCode': '. . . . . ',
      },
      '6': {
        'telephonic': 'SIX',
        'morseCode': '- . . . .',
      },
      '7': {
        'telephonic': 'SEVEN',
        'morseCode': '- - . . . ',
      },
      '8': {
        'telephonic': 'EIGHT',
        'morseCode': '- - - . . ',
      },
      '9': {
        'telephonic': 'NINE',
        'morseCode': '- - - - .',
      },
      'A': {
        'telephonic': 'ALPHA',
        'morseCode': '. _',
      },
      'B': {
        'telephonic': 'BRAVO',
        'morseCode': '_ . . .',
      },
      'C': {
        'telephonic': 'CHARLIE',
        'morseCode': '_ . _ .',
      },
      'D': {
        'telephonic': 'DELTA',
        'morseCode': '_ . .',
      },
      'E': {
        'telephonic': 'ECHO',
        'morseCode': '.'
      },
      'F': {
        'telephonic': 'FOXTROT',
        'morseCode': '. . _ .',
      },
      'G': {
        'telephonic': 'GOLF',
        'morseCode': '_ _ .',
      },
      'H': {
        'telephonic': 'HOTEL',
        'morseCode': '. . . .',
      },
      'I': {
        'telephonic': 'INDIA',
        'morseCode': '. .',
      },
      'J': {
        'telephonic': 'JULIET',
        'morseCode': '. _ _ _',
      },
      'K': {
        'telephonic': 'KILO',
        'morseCode': '_ . _',
      },
      'L': {
        'telephonic': 'LIMA',
        'morseCode': '. _ . .',
      },
      'M': {
        'telephonic': 'MIKE',
        'morseCode': '_ _',
      },
      'N': {
        'telephonic': 'NOVEMBER',
        'morseCode': '_ .',
      },
      'O': {
        'telephonic': 'OSCAR',
        'morseCode': '_ _ _',
      },
      'P': {
        'telephonic': 'PAPA',
        'morseCode': '. _ _ .',
      },
      'Q': {
        'telephonic': 'QUEBEC',
        'morseCode': '_ _ . _',
      },
      'R': {
        'telephonic': 'ROMEO',
        'morseCode': '. _ .',
      },
      'S': {
        'telephonic': 'SIERRA',
        'morseCode': '. . .',
      },
      'T': {
        'telephonic': 'TANGO',
        'morseCode': '_',
      },
      'U': {
        'telephonic': 'UNIFORM',
        'morseCode': '. . _',
      },
      'V': {
        'telephonic': 'VICTOR',
        'morseCode': '. . . _',
      },
      'W': {
        'telephonic': 'WHISKEY',
        'morseCode': '. _ _',
      },
      'X': {
        'telephonic': 'XRAY',
        'morseCode': '_ . . _',
      },
      'Y': {
        'telephonic': 'YANKEE',
        'morseCode': '_ . _ _',
      },
      'Z': {
        'telephonic': 'ZULU',
        'morseCode': '_ _ . .'
      },
      '"': {
        'telephonic': 'double-quote',
        'morseCode': '. - . . - . '
      },
      '$': {
        'telephonic': 'money-sign',
        'morseCode': '. . . - . -'
      },
      '\'': {
        'telephonic': 'single-quote',
        'morseCode': '.----.'
      },
      '(': {
        'telephonic': 'open-paranthesis',
        'morseCode': '- . - - .'
      },
      ')': {
        'telephonic': 'close-paranthesis',
        'morseCode': '- . - - .'
      },
      '+': {
        'telephonic': 'plus',
        'morseCode': '. - . - .'
      },
      ',': {
        'telephonic': 'plus',
        'morseCode': '--..--'
      },
      '.': {
        'telephonic': 'plus',
        'morseCode': '. - . . - .'
      },
      '/': {
        'telephonic': 'plus',
        'morseCode': '- . . - .'
      },
      ':': {
        'telephonic': 'colon',
        'morseCode': '- - - . . . '
      },
      ';': {
        'telephonic': 'simi-colon',
        'morseCode': '- , - , - ,'
      },
      '=': {
        'telephonic': 'equal',
        'morseCode': '- . . . -'
      },
      '?': {
        'telephonic': 'question',
        'morseCode': '. . - - . .'
      }
    };
    this.AUDIO_FILE = this._webGetAlpAudioFile();
  }

  _webGetAlpAudioFile() {
    const morse_alphabet = [
      ['A', 'Alpha'],
      ['B', 'Bravo'],
      ['C', 'Charlie'],
      ['D', 'Delta'],
      ['E', 'Echo'],
      ['F', 'Foxtrot'],
      ['G', 'Golf'],
      ['H', 'Hotel'],
      ['I', 'India'],
      ['J', 'Juliet'],
      ['K', 'Kilo'],
      ['L', 'Lima'],
      ['M', 'Mike'],
      ['N', 'November'],
      ['O', 'Oscar'],
      ['P', 'Papa'],
      ['Q', 'Quebec'],
      ['R', 'Romeo'],
      ['S', 'Sierra'],
      ['T', 'Tango'],
      ['U', 'Uniform'],
      ['V', 'Victor'],
      ['W', 'Whiskey'],
      ['X', 'Xray'],
      ['Y', 'Yankee'],
      ['Z', 'Zulu'],
    ];
    const result = [];
    for (const item of morse_alphabet) {
      const char = item[0];
      const phonic = item[1];
      const src_url = 'http://morsecodealphabet.org/mp3/Morse%20Code%20Alphabet%20' + char + '%20' + phonic + '.mp3';
      result.push({
        'letter' : char,
        'phonic' : phonic,
        'audio'  : new Audio(src_url)
      });
    }
    return;
  };
  _encodeString(str) {
    const alphabet = this.morse_alphabet;
    // returns encoded version of str
    return str.split('') // Transform the string into an array
      .map(function(e){        // Replace each character with a morse "letter"
        const a = alphabet[e.toUpperCase()] || '';
        return a.morseCode;
      })
      .join(' ')            // Convert the array back to a string.
      .replace(/ +/g, ' '); // Replace double spaces that may occur when unknown characters were in the source string.
  }

  getfileEncoded() {
    if (!this.file_data_encoded) { return null; }
    return this.file_data_encoded;
  }
  clearEncoded() {
    this.file_data_encoded = '';
  }
  loadTextCorpus(data) {
    if (!data) {
      this.file_data_encoded =  null;
    }
    this.og_file_text = data;
  }
  encodeString(str) {
    return this._encodeString(str);
  }
  encodeTextOgCorpus() {
    this.file_data_encoded = this._encodeString(this.og_file_text);
    return;
  }
}
