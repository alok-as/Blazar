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
.price-cards{
    margin-top: 8rem;
    display: flex;
}
.price-card{
    border: 1px solid #eeeeee;
    background-color: white;
    &--1{
        align-self:flex-start;
        border-right: none;
        border-radius: 5px 0 0 5px;
    }
    &--2{
        transform: translateY(-4rem);
        border: none;
        box-shadow: 0 20px 50px rgba(51,78,111, 0.1);
        border-radius: 5px;
    }
    &--3{
        align-self:flex-start;
        border-left: none;
        border-radius: 0 5px 5px 0;
    }

    &__header{
        padding: 2.5rem 3.5rem;
        position: relative;
        &--1{
            background-color: #3ed376;
            border-radius: 5px 0 0 5px;

        }
        &--2{
            background-color: #28b8dc;
            border-radius: 5px;
        }
        &--3{
            background-color: #5c79f4;
            border-radius: 0 5px 5px 0;
        }
    }
    &__img{
        position: absolute;
        width: 5rem;
        top: 3.5rem;
        right: 4rem;
    }
    &__time{
        font-size: 1.6rem;
        color: $color-white;
        margin-top: .5rem;
    }
    &__footer{
        padding: 4rem;
    }
    &__description{
        font-size: 1.4rem;
        color: $color-grey-dark;
        margin-bottom: 2.5rem;
    }

}

.package{
    list-style: none;
    &__item{
        border-bottom: 1px solid #eeeeee;
        padding: 1.8rem 0;
        text-align: center;
        font-size: 1.8rem;
        color: $color-grey-dark;
        span{
            color: #334e6f;
            font-weight: 600;
        }
    }
}

.button{
    border: none;
    outline: none;
    padding: 1.4rem 4rem;
    border-radius: 100px;
    font-size: 1.6rem;
    font-family: inherit;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
    transition: all .3s;
    &--1{
        background-color: #3ed376;
        border: 1px solid #3ed376;
        &:hover{
            color: #3ed376;
        }
    }
    &--2{
        background-color: #28b8dc;
        border: 1px solid #28b8dc;
        &:hover{
            color: #28b8dc;
        }
    }
    &--3{
        background-color: #5c79f4;
        border: 1px solid #5c79f4;
        &:hover{
            color: #5c79f4;
        }
    }
    &:hover{
        background-color: $color-white;
    }
}
</style>
