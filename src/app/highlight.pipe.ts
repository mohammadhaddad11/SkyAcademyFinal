import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if (!searchTerm) {
      return value; // Return original if no search term
    }
    const re = new RegExp(searchTerm, 'gi'); // Case-insensitive search
    const highlighted = value.replace(
      re,
      (match) => `<span class="highlighted">${match}</span>`
    ); // Wrap in span with custom class
    return this.sanitizer.bypassSecurityTrustHtml(highlighted); // Return safe HTML
  }
}
