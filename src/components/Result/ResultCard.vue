<template>
    <div class="card">
        <img class="card__img" :src="result.img" alt="Card 1">
        <div class="card__content">
            <h4 class="heading-4 card__heading">{{result.title}}</h4>
            <p class="card__text">{{result.tagline}}</p>
            <div class="card__ratings">
                <svg class="card__icon card__icon--star">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
                <svg class="card__icon card__icon--star">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
                <svg class="card__icon card__icon--star">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
                <svg class="card__icon card__icon--star">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
                <svg class="card__icon card__icon--star">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
            </div>
            <div class="card__footer mt-small">
                <span class="card__location">{{result.location}}</span>
                <span class="card__like">
                    <span class="card__like--text">Save</span>
                    <svg class="card__icon card__icon--heart">
                        <use xlink:href="../../sass/sprites.svg#icon-heart-outlined"></use>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['result']
}
</script>

<style lang="scss" scoepd>
</style>
