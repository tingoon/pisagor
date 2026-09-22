<script setup lang="ts">
import { Field, Input } from "@pisagor/vue";
import { ColorPicker, parseColor } from "..";

const rgbaValue = parseColor("#0485F7").toString("rgba");
const hsbaValue = parseColor("#EF4444").toString("hsba");
const hslaValue = parseColor("#F59E0B").toString("hsla");
const hexValue = parseColor("#10B981").toString("hex");
</script>

<template>
        <div class="flex flex-col gap-2">
          <ColorPicker class="w-full" :default-value="rgbaValue" format="rgba">
            <ColorPicker.View format="rgba">
              <Field orientation="horizontal">
                <Field.Label>RGB</Field.Label>
                <ColorPicker.Input as-child channel="red" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="green" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="blue" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.SwatchPreview class="size-6" />
              </Field>
            </ColorPicker.View>
          </ColorPicker>
          <ColorPicker class="w-full" :default-value="hsbaValue" format="hsba">
            <ColorPicker.View format="hsba">
              <Field orientation="horizontal">
                <Field.Label>HSB</Field.Label>
                <ColorPicker.Input as-child channel="hue" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="saturation" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="brightness" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.SwatchPreview class="size-6" />
              </Field>
            </ColorPicker.View>
          </ColorPicker>
          <ColorPicker class="w-full" :default-value="hslaValue" format="hsla">
            <ColorPicker.View format="hsla">
              <Field orientation="horizontal">
                <Field.Label>HSL</Field.Label>
                <ColorPicker.Input as-child channel="hue" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="saturation" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="lightness" class="w-full">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.SwatchPreview class="size-6" />
              </Field>
            </ColorPicker.View>
          </ColorPicker>
          <ColorPicker class="w-full items-center" :default-value="hexValue">
            <Field.Label>Hex</Field.Label>
            <Field orientation="horizontal">
              <ColorPicker.Control class="min-w-0 flex-1">
                <ColorPicker.Input as-child channel="hex">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.Input as-child channel="alpha">
                  <Input />
                </ColorPicker.Input>
                <ColorPicker.SwatchPreview class="size-6" />
              </ColorPicker.Control>
            </Field>
          </ColorPicker>
        </div>
  
</template>
