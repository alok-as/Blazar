<template>
    <div class="composition">
        <div class="composition__photo">
            <img class="composition__img" :src="step.image" alt="Photo 1">
        </div>
        <div class="composition__content">
            <div class="composition__card">
                <h3 class="composition__title">{{step.title}}</h3>
                <p class="composition__paragraph">{{step.content}}</p>
                <button class="composition__btn">
                    Learn more
                    <svg>
                        <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
                    </svg>
                </button>
                <div class="composition__number">{{step.id}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['step']
}
</script>
<style lang="scss" scoped>
  @import "../../sass/components/works/_composition.scss";
</style>
