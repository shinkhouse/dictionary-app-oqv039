import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchBarComponent),
            multi: true,
        },
    ],
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, ControlValueAccessor {
    @ViewChild('searchInput', { static: false }) searchInputElement: ElementRef;
    @Input() placeholder?: string;
    @Input() cancelButtonText?: string;
    @Input() showCancelButton: 'focus' | 'always' | 'never' = 'focus';
    @Input() type = 'search';
    @Input() value: any;
    @Input() iconPosition: string;
    @Input() labelPosition: string;
    @Input() bcgColor: string;
    @Input() borderColor: string;
    @Output() cancel: EventEmitter<null> = new EventEmitter<null>();
    @Output() clear: EventEmitter<null> = new EventEmitter<null>();
    @Output() submitInput: EventEmitter<any> = new EventEmitter<any>();
    @Output() focusInput: EventEmitter<any> = new EventEmitter<any>();
    @Output() queryChange: EventEmitter<string> = new EventEmitter<string>();
    query: any;
    focused: boolean;
    blurTimeout;

    constructor(public platform: Platform) {}

    propagateChange = (_: any) => {};
    ngOnInit() {
        if (this.value !== undefined) {
            this.query = this.value;
        }
    }

    showFocus() {
        if (this.showCancelButton === 'never') {
            return false;
        } else if (this.showCancelButton === 'always') {
            return true;
        } else {
            return this.focused;
        }
    }

    cancelSearch() {
        this.cancel.emit();
    }

    clearInput() {
        this.setFocus();
        this.query = '';
        this.propagateChange('');
        this.clear.emit();
        this.queryChange.emit('');
        this.cancelSearch();
    }

    handleSubmit() {
        this.submitInput.emit(this.query);
    }

    setFocusState() {
        this.focused = true;
        this.focusInput.emit();
    }

    setFocus() {
        clearTimeout(this.blurTimeout);
        this.searchInputElement.nativeElement.focus();
    }

    clearFocus() {
        this.searchInputElement.nativeElement.blur();
    }

    setBlurTimeout() {
        this.blurTimeout = setTimeout(() => {
            this.focused = false;
        }, 50);
    }

    writeValue(obj: any): void {
        if (obj !== undefined) {
            this.query = obj;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {}
}
