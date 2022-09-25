import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [1, 2, 3, 4, 5].map((n) => `../assets/images/Carousel${n}.jpg`);

  whoWeAre = "Catch The Rhythm is a company founded by Simran Satpute in 2023. Our mantra is simple, bring together dancers who share a common passion for dance, and share that knowledge and love with the community. We make sure young artists who are striving for professional dance careers receive the support they need to make sure their aspirations become their realities..";

  whatWeDo = "We are the academy that offers a versatile program with Bollywood, Kathak and Semi-classical dance training in one single place. We work to be sure that students are well trained under our guidance and are ready to perform on stage. We push our students to face challenges so that, they can level up in their field and feel more confident about themselves.";
}
