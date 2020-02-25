<template>
    <footer class="footer">
        <div class="content footer__content">
            <div class="footer__brand">
                <div class="footer__logo">Listing <sup>easy</sup></div>
                <div class="footer__text">Without a doubt, Listing Easy is the best way to find &amp; discover the greatest places in the city.</div>
            </div>
            <div class="footer__location">
                <div class="footer__title">Our Location</div>
                <div class="footer__text">4th Floor, Office 387 5247 Doyle Coves, Jacobifort, New York, US.</div>
            </div>
            <div class="footer__location">
                <div class="footer__title">Emails</div>
                <div class="footer__text">Business@your-site.com<br>Marketing@your-site.com</div>
            </div>
            <div class="footer__location">
                <div class="footer__title">Contact Us</div>
                <div class="footer__text">Tel: +1-800-732-1521<br>Fax: +1-800-323-8761</div>
            </div>
        </div>
        <hr class="mt-medium">
        <div class="content footer__legal">
            <div class="footer__copyright">&copy; 2020 Listingeasy. All rights reserved</div>
            <div class="footer__socail-handles">
                <svg class="footer__icon">
                    <use xlink:href="../../sass/sprites.svg#icon-social-facebook"></use>
                </svg>
                <svg class="footer__icon">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
                <svg class="footer__icon">
                    <use xlink:href="../../sass/sprites.svg#icon-social-linkedin"></use>
                </svg>
                <svg class="footer__icon">
                    <use xlink:href="../../sass/sprites.svg#icon-social-twitter"></use>
                </svg>
            </div>
            <div class="footer__terms">Privacy Policy | Terms of Use</div>
        </div>
    </footer>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer{
    background-color: #1f1f1f;
    color: $color-white;
    padding: 5rem 0 2rem 0;

    &__content{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(24rem,1fr));
        grid-gap: 4rem;
    }
    &__logo{
    font-weight: 600;
    font-size: 2.3rem;
    text-transform: uppercase;
    color: $color-white;
    display: flex;
    align-items: center;

        sup{
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.3rem;
            margin-top: -1rem;
            margin-left: .5rem;
        }

        &::before{
            content: "";
            display: inline-block;
            width: 3.5rem;
            height: 3.5rem;
            margin-right: .7rem;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/location.svg);
                    mask-image: url(../../assets/SVG/location.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }

    }

    &__title{
        font-size: 1.8rem;
        font-weight: 600;
    }

    &__legal{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    }

    &__text{
        color: $color-dark;
        margin-top: 2rem;
    }

    &__copyright,&__terms{
        color: $color-dark;
        font-size:1.2rem;
        text-transform: uppercase;
        font-weight: 500;
    }

    &__icon {
        width: 2.2rem;
        height: 2.2rem;
        fill: $color-dark;
        &:not(:last-child){
            margin-right: 1.2rem;
        }
    }
}

hr{
    border-bottom: 1px solid $color-white;
}

</style>
