import { LitElement } from 'lit';
export declare class MirzaInputRangeElement extends LitElement {
    static styles: import("lit").CSSResult[];
    min: number;
    max: number;
    values: number[];
    step: number;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'mirza-input-range': MirzaInputRangeElement;
    }
}
//# sourceMappingURL=mirza-input-range.d.ts.map