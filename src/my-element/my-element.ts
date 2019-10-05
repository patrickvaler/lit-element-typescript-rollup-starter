/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo bar test';

  /**
   * Implement `render` to define a template for your element.
   */
  render(): TemplateResult {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <p>${this.foo}</p>
    `;
  }
}
