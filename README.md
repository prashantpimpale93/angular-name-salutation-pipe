# PipeExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Simple Custom Pipe Example:
To generate pipe :

```
ng g p my-awesome-pipe

```

then in app.module.ts:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { My-Awesome-Pipe } from './my-awesome-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    My-Awesome-Pipe <-- Add in declarations array
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Then use it as:

```
<div>{{name | my-awesome-pipe }}</div>
```

<h2>About Angular Pipe:</h2>
<div>
  <ul>
    <li>The Angular pipe is used when you want to modify the underlying data.</li>
    <li>When you want to modify or update existing data then use Pipe.</li>
    <li>Need to import and has be to added in <b>declarations</b> array of module</li>
    <li>We can not use Pipe as for single Component (Restricted for xyxComponent only is not possible)</li>
    <li>We can pass mulitple parameter to the transform method of Pipe by using <b><i>:</i></b> as a seperator</li>
  </ul>
</div>

