# Chagall

🎨 Tiny CSS framework (4kb) to make websites look good.

Chagall is inspired by [Simple.css](https://simplecss.org/) and [tailwind.css](https://tailwindcss.com/). It was designed to reduce:

- The bundle size of any client application.
- The amount of `css` that must be written.

Chagall was originally created for the calorie tracker [Clean Slate](https://github.com/successible/cleanslate). We find it strikes a good balance between simplicity and power.

To use Chagall, add `chagall.scss` into your project. This will automatically style elements like `h2`. You can also use utility classes, like `mt10` or `fcs`.

If you are using CSS-in-JS, like [Emotion](https://emotion.sh/), you can also import `chagall.ts`. This file defines the SCSS variables (color and layout) in TypeScript.

Here is one way to that:

```ts
import * as chagall from "../node_modules/chagall/src/chagall";

export const { colors, layout } = chagall;
export const { lg, md, sm, xlg, xs, xxlg } = layout;

export type Colors = keyof typeof colors;
```
