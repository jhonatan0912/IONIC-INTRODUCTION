import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})

export class InfinitePage implements OnInit {

  data: any = Array(20);

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    console.log(event)

    setTimeout(() => {
      console.log(this.data.length)
      if (this.data.length >= 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      /* Creating a new array with 20 elements and pushing it to the data array. */
      const newArr = Array(20);
      this.data.push(...newArr);

      // event.target.complete();
      /* Telling the infinite scroll to stop loading. */
      this.infiniteScroll.complete();
    }, 1500);


  }
}
