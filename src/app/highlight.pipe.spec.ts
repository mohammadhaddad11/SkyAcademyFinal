import { HighlightPipe } from './highlight.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    // Use Angular's TestBed to provide a mock DomSanitizer
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: (html: string) => html, // Mock implementation
          },
        },
      ],
    });

    // Inject the mock DomSanitizer
    sanitizer = TestBed.inject(DomSanitizer);

    // Create the pipe with the mock DomSanitizer
    pipe = new HighlightPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy(); // Check if the pipe instance is created
  });

  it('should highlight search term in the value', () => {
    const result = pipe.transform('Ali Kamal', 'kamal');
    expect(result).toContain('<mark>Kamal</mark>'); // Check if "Kamal" is wrapped in <mark>
  });

  it('should return original value if no search term', () => {
    const result = pipe.transform('Ali Kamal', '');
    expect(result).toBe('Ali Kamal'); // If no search term, original string should be returned
  });
});
