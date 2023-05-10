<template>
  <div class="realestate">
    <v-search
      v-model:inputValue="searchInputValue"
      name="search"
      placeholder="Введите ЖК / тип объекта / корпус / № квартиры / № паркинга"
      class="input input__search"
    ></v-search>
    <div class="toolbar">
      <v-checkbox
        v-model="isCheckedAll"
        label="Выделить все"
        @update-checkall="selectAll"
      />
      <div>
        <p class="toolbar__title">Фильтр по статусам</p>
        <div v-for="item in realEstateList" :key="item.id">
          <v-checkbox
            v-model="selectedByStatus"
            :value="item"
            :label="item.status"
          />
        </div>
      </div>
    </div>
    <section class="content-list">
      <template v-for="item in filteredRealEstateList" :key="item.id">
        <v-card
          v-model="checkedValues"
          :value="item"
          @update-checkall="updateCheckAll"
        ></v-card>
      </template>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import VSearch from "@/components/VSearch.vue";
import VCard from "@/components/VCard.vue";
import VCheckbox from "@/components/VCheckbox.vue";

const searchInputValue = ref("");

const selectedByStatus = ref([]);

const isCheckedAll = ref(false);

const checkedValues = ref([]);

const realEstateList = [
  {
    id: 1,
    price: "7 733 300 руб.",
    type: "Квартира",
    icon: "icon-floorplan",
    status: "Уступка от юр. лица",
    name: "Чистое Небо, корпус 10, III кв. 2022 г.",
    number: "кв. 62",
    area: "234.38 м2",
    rooms: 1,
    address:
      "Лен. область, Всеволожский район, д.Кудрово, ул.Столичная, д. 5, к. 1",
    floor: "7 этаж",
    picture: `${require("@/assets/img/floorplan.png")}`,
    date: "21/11/2020",
    tooltip: "С видом на набережную",
  },
  {
    id: 2,
    price: "7 733 300 руб.",
    type: "",
    icon: null,
    status: "Уступка от физ. лица",
    name: "Зеленый квартал на Пулковских высотах, корпус 5, III кв. 2022 г.",
    number: "кв. 111",
    area: "234.38 м2",
    rooms: 1,
    address: "Комендантский пр., уч. 1 Каменка",
    floor: "7 этаж",
    picture: `${require("@/assets/img/floorplan.png")}`,
    date: "21/11/2020",
    tooltip: null,
  },
  {
    id: 3,
    price: "800 300 руб.",
    type: "Паркинг",
    icon: "icon-car",
    status: "Забронировано",
    name: "Зеленый квартал на Пулковских высотах, корпус 10, III кв. 2022 г.",
    number: "№ 7-10-2 (ПИБ №68)",
    area: "15 м2",
    rooms: null,
    address:
      "Ленинградская область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1",
    floor: "",
    picture: `${require("@/assets/img/floorplan.png")}`,
    date: "21/11/2020",
    tooltip: "Наземная пристроенная",
  },
  {
    id: 4,
    price: "800 300 руб.",
    type: "Паркинг",
    icon: "icon-car",
    status: "Продано",
    name: "Зеленый квартал на Пулковских высотах, корпус 3, III кв. 2022 г.",
    number: "№ 7-3-2 (ПИБ №31)",
    area: "15 м2",
    rooms: null,
    address:
      "Лен. область, Всеволожский район, д.Кудрово, ул.Столичная, д. 5, к. 1",
    floor: "",
    picture: `${require("@/assets/img/floorplan.png")}`,
    date: "21/11/2020",
    tooltip: "Подземная встроенно-пристроенная",
  },
];

const selectAll = () => {
  isCheckedAll.value = !isCheckedAll.value;
  checkedValues.value = [];

  if (isCheckedAll.value) {
    filteredRealEstateList.value.forEach((element) => {
      checkedValues.value.push(element);
    });
  }
};

const updateCheckAll = () => {
  if (filteredRealEstateList.value.length === checkedValues.value.length) {
    isCheckedAll.value = true;
  } else {
    isCheckedAll.value = false;
  }
};

//варианты поиска  по разным свойствам объекта - наименованию ЖК, номеру квартиры, типу объекта недвижимости (паркинг/квартира)
const searchFields = (arr) => {
  return arr.filter((item) => {
    switch (true) {
      case item.name
        .toLowerCase()
        .includes(searchInputValue.value.toLowerCase()):
        return item;
      case item.number
        .toLowerCase()
        .includes(searchInputValue.value.toLowerCase()):
        return item;
      case item.type
        .toLowerCase()
        .includes(searchInputValue.value.toLowerCase()):
        return item;
    }
  });
};

//фильтр по полю поиск и/или по статусам (чекбоксы)
const filteredRealEstateList = computed(() => {
  switch (true) {
    case selectedByStatus.value.length > 0 && !!searchInputValue.value:
      return searchFields(selectedByStatus.value);
    case !!searchInputValue.value:
      return searchFields(realEstateList);
    case selectedByStatus.value.length > 0:
      return selectedByStatus.value;
    default:
      return realEstateList;
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
  padding: 33px 0;

  font-family: $font;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: $color-black;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 15px 0;
  }

  &__title {
    font-size: 15px;
    font-weight: 700;
    margin: 0 0 10px 0;
    text-align: right;
  }
}

.content-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 23px;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
}
</style>
