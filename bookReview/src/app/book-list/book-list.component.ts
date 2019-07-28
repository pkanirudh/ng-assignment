import { Component, OnInit, Input, Output } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Books[];
  listTitle = "List of books"
  selectedBook:number;

  obj

  reviewEnable:boolean;

  @Input()
  review

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.service.findall().subscribe(resp => this.bookList = resp)
    this.selectedBook=-1;
    this.reviewEnable=false;

  }

  addReview(index){
    this.selectedBook=index;
    this.reviewEnable=true;
  }

  newReview(index){
   
     this.obj = JSON.parse(JSON.stringify(this.bookList[index]));
     this.obj.review = [...this.bookList[index].review, this.review];
    
    
    this.service.addReview(this.obj).subscribe(
      response => console.log(response)
    );

  }

}

