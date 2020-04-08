<template>
    <div class="price-cards">
        <div class="price-card price-card--1">
            <div class="price-card__header price-card__header--1">
                <h4 class="heading-4 heading-4--light">Standard</h4>
                <p class="price-card__time">Free / per 1 month</p>
                <img class="price-card__img" src="../../assets/standard_package.png" alt="Standard Package">
            </div>
            <div class="price-card__body">
                <ul class="package">
                    <li class="package__item"><span>One</span> listing</li>
                    <li class="package__item"><span>30 Days</span> availability</li>
                    <li class="package__item"><span>Standard</span> listing</li>
                    <li class="package__item"><span>Limited</span> support</li>
                </ul>
            </div>
            <div class="price-card__footer center">
                <div class="price-card__description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                <button class="button button--1">Sign Up</button>
            </div>
        </div>

        <div class="price-card price-card--2">
            <div class="price-card__header price-card__header--2">
                <h4 class="heading-4 heading-4--light">Professional</h4>
                <p class="price-card__time">£19.90 / per 1 month</p>
                <img class="price-card__img" src="../../assets/professional_package.png" alt="Standard Package">
            </div>
            <div class="price-card__body">
                <ul class="package">
                    <li class="package__item"><span>One</span> listing</li>
                    <li class="package__item"><span>30 Days</span> availability</li>
                    <li class="package__item"><span>Standard</span> listing</li>
                    <li class="package__item"><span>Limited</span> support</li>
                </ul>
            </div>
            <div class="price-card__footer center">
                <div class="price-card__description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                <div class="price-card__description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                <div class="price-card__description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                <button class="button button--2">Sign Up</button>
            </div>
        </div>

        <div class="price-card price-card--3">
            <div class="price-card__header price-card__header--3">
                <h4 class="heading-4 heading-4--light">Business</h4>
                <p class="price-card__time">£29.90 / per 1 month</p>
                <img class="price-card__img" src="../../assets/business_package.png" alt="Standard Package">
            </div>
            <div class="price-card__body">
                <ul class="package">
                    <li class="package__item"><span>One</span> listing</li>
                    <li class="package__item"><span>30 Days</span> availability</li>
                    <li class="package__item"><span>Standard</span> listing</li>
                    <li class="package__item"><span>Limited</span> support</li>
                </ul>
            </div>
            <div class="price-card__footer center">
                <div class="price-card__description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                <button class="button button--3">Sign Up</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import "../../sass/components/pricing/_cards.scss";
</style>
