import { Component, OnInit } from '@angular/core';
import { titles } from '../data/titles';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl('');
  titleList: any = [];
  filteredOptions!: Observable<any[]>;
  fullname = '';

  constructor() { }

  ngOnInit(): void {

    this.titleList = titles;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const title = typeof value === 'string' ? value : null;
        return title && title.length > 2 ? this._filter(title as string) : [];
      })

    );
  }


  displayFn(): string {
    return '';
  }

  onChange(li:any){
    this.fullname = li.full_name
  }


  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();

    return this.titleList.filter((list: any) => list.name.toLowerCase().includes(filterValue));
  }

}
