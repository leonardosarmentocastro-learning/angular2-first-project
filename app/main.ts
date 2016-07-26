import { bootstrap }    from '@angular/platform-browser-dynamic';
import "rxjs/Rx";

// This is one of the options you have when bootstraping your 
// high-level dependencies. You can do it available ate main.ts or
// at "app.component.ts".
// Providing those dependencies here doesn't requipre the "providers" keyword
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';


// Providing dependencies on bootstrap, just add an "array" parameter with your dependencies
bootstrap(AppComponent, [HTTP_PROVIDERS]);
