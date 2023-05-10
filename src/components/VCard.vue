<template>
  <div class="card">
    <label class="checkbox-item">
      <div>
        <div class="card__header">
          <span class="card__price">{{ value.price }}</span>
          <div v-if="value.type" class="card__type tooltip">
            <v-icon :icon-id="value.icon" width="21" height="14" class="icon" />
            <span>{{ value.type }}</span>
            <span class="tooltip-text">{{ value.tooltip }}</span>
          </div>
          <div class="hidden" v-else>Hidden block</div>
          <div
            class="card__status"
            :class="{
              card__status_legal: value.status === 'Уступка от юр. лица',
              card__status_individual: value.status === 'Уступка от физ. лица',
              card__status_booked: value.status === 'Забронировано',
              card__status_sold: value.status === 'Продано',
            }"
          >
            {{ value.status }}
          </div>
        </div>
        <p class="card__title card__text">{{ value.name }}</p>
        <div class="card__details card__text">
          <div class="card-wrp">
            <div class="card__details-item">
              <span>{{ value.number }}</span>
              <span v-if="value.rooms">{{ value.rooms }} комн.кв.</span>
            </div>
            <div class="card__details-item">
              <span>{{ value.area }}</span>
              <span>{{ value.floor }}</span>
            </div>
          </div>
          <div>
            <img class="card__img" :src="value.picture" alt="photo" />
          </div>
        </div>
        <div class="card__footer card__text">
          <div class="card__footer-item card__footer-icon">
            <div>
              <v-icon
                icon-id="icon-address"
                width="19"
                height="13"
                class="icon"
              />
            </div>
            <span>{{ value.address }}</span>
          </div>
          <span class="card__footer-item card__date"
            >Добавлено {{ value.date }}</span
          >
        </div>
      </div>
      <input
        v-model="model"
        type="checkbox"
        class="checkbox__input"
        :value="value"
        @change="updateCheckAll"
      />
      <span class="checkmark-box"></span>
    </label>
    <span class="tooltip"></span>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from "vue";
import VIcon from "@/components/VIcon.vue";

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
});
const emit = defineEmits(["update:modelValue", "updateCheckall"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const updateCheckAll = () => {
  emit("updateCheckall");
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.hidden {
  visibility: hidden;
}

.card-wrp {
  width: 50%;
  display: flex;
}

.tooltip {
  position: relative;
}

.tooltip .tooltip-text {
  font-family: $font;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: $color-background-card;
  background-color: $color-background-tooltip;
  opacity: 0.7;

  padding: 19px 25px 12px 25px;
  width: 200%;

  position: absolute;
  top: 150%;
  left: 30%;
  z-index: 1;
  visibility: hidden;

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 10%;
    border: 14px solid transparent;
    border-bottom: 7px solid $color-background-tooltip;
  }
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}

.card {
  background: $color-background-card;
  padding: 21px 35px 25px 35px;

  &__header,
  &__details,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__footer {
    align-items: end;
  }

  &__details-item {
    display: flex;
    flex-direction: column;
    padding-left: 28px;

    &:first-child {
      border-right: 1px solid #c4c4c4;
      padding-right: 28px;
      padding-left: 0;
    }
  }

  &__price {
    font-family: $font;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: $color-red;
  }

  &__type {
    font-family: $font;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $color-type;

    box-shadow: 0px 0px 2px rgba(94, 119, 157, 0.25);
    border-radius: 32px;

    padding: 5px 23px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__status {
    font-family: $font;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    padding: 6px 9px;
    display: flex;
    align-items: center;

    &_legal {
      background: $color-status-bg-legal;
      color: $color-status-legal;

      &::before {
        background-color: $color-status-legal;
      }
    }

    &_individual {
      background: $color-status-bg-individual;
      color: $color-status-individual;

      &::before {
        background-color: $color-status-individual;
      }
    }

    &_booked {
      background: $color-status-bg-booked;
      color: $color-status-booked;

      &::before {
        background-color: $color-status-booked;
      }
    }

    &_sold {
      background: $color-status-bg-sold;
      color: $color-status-sold;

      &::before {
        background-color: $color-status-sold;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      margin-right: 8px;
    }
  }

  &__title {
    width: 50%;
  }

  &__text {
    font-family: $font;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: $color-black;
  }

  &__img {
    max-width: 100%;
  }

  &__footer-item {
    width: 50%;
  }

  &__footer-icon {
    display: flex;
  }

  &__date {
    font-family: $font;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    text-align: right;
    color: $color-grey;
  }
}

.checkbox-item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: $font;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: $color-black;

  display: block;
  position: relative;
  padding-left: 57px;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.checkmark-box {
  position: absolute;
  top: calc(50% - 9px);
  left: 0;
  height: 16px;
  width: 22px;
  border: 1px solid $color-grey;

  &:hover {
    cursor: pointer;
  }
}

.checkbox-item:hover input ~ .checkmark-box {
  border: 1px solid $color-border-checkbox;
}

.checkbox__input:checked ~ .checkmark-box {
  border: 1px solid $color-black;
  background: $color-background-checkbox;
}

.checkmark-box:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox__input:checked ~ .checkmark-box:after {
  display: block;
}

.checkbox-item .checkmark-box:after {
  left: 8px;
  top: 0;
  width: 6px;
  height: 11px;
  border: solid $color-black;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
