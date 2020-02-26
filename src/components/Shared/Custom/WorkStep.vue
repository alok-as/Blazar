<template>
    <div class="works__step">
      <div class="works__photo">
        <img class="works__img" :src="step.img" alt="Step 1">
        <div class="works__index">{{step.id}}</div>
      </div>
      <h4 class="heading-4 heading-4--dark">{{step.title}}</h4>
      <p class="paragraph">{{step.description}}</p>
    </div>
</template>
<script>
export default {
  props: ['step']
}
</script>
<style lang="scss" scoped>
.paragraph{
  margin-top: 1rem;
}
</style>
