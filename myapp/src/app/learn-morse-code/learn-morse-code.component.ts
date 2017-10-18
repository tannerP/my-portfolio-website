import { Component, OnInit, ViewChild } from '@angular/core';
import { MorseCodeOperatorService } from '../services/morse-code-operator.service';
@Component({
  selector: 'app-learn-morse-code',
  templateUrl: './learn-morse-code.component.html',
  styleUrls: ['./learn-morse-code.component.scss']
})
export class LearnMorseCodeComponent implements OnInit {
  public title = 'Morse Code';
  public slogan = 'Translate English text to Morse code';
  @ViewChild('inputFile') inputFileEl: any; // input file element
  text_area: string;
  urList: Array<object>;
  translate_view: {'og_word': string, 'morse_code': string};

  constructor( public mOpertor: MorseCodeOperatorService ) {
    // initialize variables before views
    this.urList = [];
    this.translate_view = {'og_word': '', 'morse_code': ''};
  }

  ngOnInit() {
  }

  // Connect to translate-button
  playSound() {
    let src = 'http://morsecodealphabet.org/mp3/Morse%20Code%20Alphabet%20A%20Alpha.mp3';
    const audio = new Audio(src);
    audio.play();
  };
  removeUrlistItem(index) {
    if (index < 0 || index > this.urList.length) {
      return -1;
    }
    return this.urList.splice(index, 1);
  }
  // Ur List function
  addtoUrList(text) {
    if (text) {
      this.urList.unshift({'eng': text, 'morse': this.mOpertor.encodeString(text)});
      text = '';
    }
  }
  // Load file once a user select one
  fileInput_onChange($event: any, morse_s) {
    const blob = $event.srcElement.files[0];
    const reader = new FileReader();
    reader.readAsText(blob, 'UTF-8');
    reader.onloadend = function(evnt) {
      morse_s.loadTextCorpus(reader.result);
      morse_s.encodeTextOgCorpus();
    };
  }
  // reset all files relate data
  fileReset() {
    this.inputFileEl.nativeElement.value = '';
    this.mOpertor.clearEncoded();
  }
  // translate textarea enter-button
  translate_onChange(event: any, str?: string ) {
    // str are preset words
    if ( str) {
      this.text_area = str;
    }
    this.translate_view.og_word = this.text_area;
    this.translate_view.morse_code = this.mOpertor.encodeString(this.text_area);
  }
}
