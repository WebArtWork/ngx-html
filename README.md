# ngx-html

## Usage
```html
<whtml placeholder="Write text here :)" [inline]="false" [disabled]="false" [(model)]="value.html" (modelChange)="test()"></whtml>
```

## Arguments
```
placeholder: string | Placeholder for editor
inline: boolean | Inline mode editor
disabled: boolean | Set mode is readonly if TRUE
model: string | Returns the input text
modelChange | Called when model changes
```