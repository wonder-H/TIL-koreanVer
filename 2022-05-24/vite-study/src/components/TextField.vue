<template>
	<input
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>

</template>
<!-- this는 템플릿 영역에서는 생략 가능. this.$emit() -> $emit() -->
<!-- update:modelValue 는 지정된 값. 이름 변경 X -->
<script>
	export default {
		props: {
			modelValue: {
				// v-model적용된 값은 modelValue로 명시하면 받을 수 있다. 이름 변경 X
				type: String,
				default: "",
			},
		},
		// v-model적용된 데이터를 emits에서 명시해 연결
		emits: ["update:modelValue"],
	};
</script>
<style lang="scss" scoped>
	input {
		color: red;
	}
</style>