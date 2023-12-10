import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import * as noUiSlider from 'nouislider';

@customElement('mirza-input-range')
export class MirzaInputRangeElement extends LitElement {
    static override styles = [
        css`
    .noUi-target,
    .noUi-target * {
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -ms-touch-action: none;
        touch-action: none;
        -ms-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .noUi-target {
        position: relative
    }

    .noUi-base,
    .noUi-connects {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1
    }

    .noUi-connects {
        overflow: hidden;
        z-index: 0
    }

    .noUi-connect,
    .noUi-origin {
        will-change: transform;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        -ms-transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
        -webkit-transform-style: preserve-3d;
        transform-origin: 0 0;
        transform-style: flat
    }

    .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
        left: 0;
        right: auto
    }

    .noUi-vertical .noUi-origin {
        top: -100%;
        width: 0
    }

    .noUi-horizontal .noUi-origin {
        height: 0
    }

    .noUi-handle {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute
    }

    .noUi-touch-area {
        height: 100%;
        width: 100%
    }

    .noUi-state-tap .noUi-connect,
    .noUi-state-tap .noUi-origin {
        -webkit-transition: transform .3s;
        transition: transform .3s
    }

    .noUi-state-drag * {
        cursor: inherit !important
    }

    .noUi-horizontal {
        height: 18px
    }

    .noUi-horizontal .noUi-handle {
        width: 34px;
        height: 28px;
        right: -17px;
        top: -6px
    }

    .noUi-vertical {
        width: 18px
    }

    .noUi-vertical .noUi-handle {
        width: 28px;
        height: 34px;
        right: -6px;
        bottom: -17px
    }

    .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
        left: -17px;
        right: auto
    }

    .noUi-target {
        background: #FAFAFA;
        border-radius: 4px;
        border: 1px solid #D3D3D3;
        box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB
    }

    .noUi-connects {
        border-radius: 3px
    }

    .noUi-connect {
        background: #3FB8AF
    }

    .noUi-draggable {
        cursor: ew-resize
    }

    .noUi-vertical .noUi-draggable {
        cursor: ns-resize
    }

    .noUi-handle {
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        background: #FFF;
        cursor: default;
        box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB
    }

    .noUi-active {
        box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB
    }

    .noUi-handle:after,
    .noUi-handle:before {
        content: "";
        display: block;
        position: absolute;
        height: 14px;
        width: 1px;
        background: #E8E7E6;
        left: 14px;
        top: 6px
    }

    .noUi-handle:after {
        left: 17px
    }

    .noUi-vertical .noUi-handle:after,
    .noUi-vertical .noUi-handle:before {
        width: 14px;
        height: 1px;
        left: 6px;
        top: 14px
    }

    .noUi-vertical .noUi-handle:after {
        top: 17px
    }

    [disabled] .noUi-connect {
        background: #B8B8B8
    }

    [disabled] .noUi-handle,
    [disabled].noUi-handle,
    [disabled].noUi-target {
        cursor: not-allowed
    }

    .noUi-pips,
    .noUi-pips * {
        -moz-box-sizing: border-box;
        box-sizing: border-box
    }

    .noUi-pips {
        position: absolute;
        color: #999
    }

    .noUi-value {
        position: absolute;
        white-space: nowrap;
        text-align: center
    }

    .noUi-value-sub {
        color: #ccc;
        font-size: 10px
    }

    .noUi-marker {
        position: absolute;
        background: #CCC
    }

    .noUi-marker-sub {
        background: #AAA
    }

    .noUi-marker-large {
        background: #AAA
    }

    .noUi-pips-horizontal {
        padding: 10px 0;
        height: 80px;
        top: 100%;
        left: 0;
        width: 100%
    }

    .noUi-value-horizontal {
        -webkit-transform: translate(-50%, 50%);
        transform: translate(-50%, 50%)
    }

    .noUi-rtl .noUi-value-horizontal {
        -webkit-transform: translate(50%, 50%);
        transform: translate(50%, 50%)
    }

    .noUi-marker-horizontal.noUi-marker {
        margin-left: -1px;
        width: 2px;
        height: 5px
    }

    .noUi-marker-horizontal.noUi-marker-sub {
        height: 10px
    }

    .noUi-marker-horizontal.noUi-marker-large {
        height: 15px
    }

    .noUi-pips-vertical {
        padding: 0 10px;
        height: 100%;
        top: 0;
        left: 100%
    }

    .noUi-value-vertical {
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        padding-left: 25px
    }

    .noUi-rtl .noUi-value-vertical {
        -webkit-transform: translate(0, 50%);
        transform: translate(0, 50%)
    }

    .noUi-marker-vertical.noUi-marker {
        width: 5px;
        height: 2px;
        margin-top: -1px
    }

    .noUi-marker-vertical.noUi-marker-sub {
        width: 10px
    }

    .noUi-marker-vertical.noUi-marker-large {
        width: 15px
    }

    .noUi-tooltip {
        display: block;
        position: absolute;
        border: 1px solid #D9D9D9;
        border-radius: 3px;
        background: #fff;
        color: #000;
        padding: 5px;
        text-align: center;
        white-space: nowrap
    }

    .noUi-horizontal .noUi-tooltip {
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        left: 50%;
        bottom: 120%
    }

    .noUi-vertical .noUi-tooltip {
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        top: 50%;
        right: 120%
    }

    .noUi-horizontal .noUi-origin>.noUi-tooltip {
        -webkit-transform: translate(50%, 0);
        transform: translate(50%, 0);
        left: auto;
        bottom: 10px
    }

    .noUi-vertical .noUi-origin>.noUi-tooltip {
        -webkit-transform: translate(0, -18px);
        transform: translate(0, -18px);
        top: auto;
        right: 28px
    }
    `,
        css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    div {
      height: inherit;
      width: inherit;
    }
  `];

    @property({ type: Number })
    min = 0;

    @property({ type: Number })
    max = 100000;

    @property({ type: Array })
    values = [0, 100000];

    @property({ type: Number })
    step = 10000;

    private slider!: noUiSlider.API;

    override render() {
        return html`
      <div> </div>
    `;
    }

    override firstUpdated() {
        const element = this.shadowRoot!.querySelector('div');

        if (element) {
            this.slider = noUiSlider.create(element, {
                start: this.values,
                connect: true,
                range: {
                    'min': [this.min],
                    'max': [this.max]
                },
                step: this.step,
                direction: 'rtl',
            });

            this.slider.on('update', (values) => {
                this.values = [parseInt(values[0].toString()), parseInt(values[1].toString())];

                this.dispatchEvent(new CustomEvent('change', {
                    detail: {
                        values: this.values,
                    }
                }));
            });
        }
    }

    override updated(changedProperties: Map<string, unknown>) {
        if (changedProperties.has('values')) {
            this.slider.set(this.values);
        }

        if (changedProperties.has('min')) {
            this.slider.updateOptions({
                range: {
                    'min': [this.min],
                    'max': [this.max]
                }
            }, false);
        }

        if (changedProperties.has('max')) {
            this.slider.updateOptions({
                range: {
                    'min': [this.min],
                    'max': [this.max]
                }
            }, false);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mirza-input-range': MirzaInputRangeElement;
    }
}