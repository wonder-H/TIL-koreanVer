<template>
	<!-- to에는 선택자의 자식으로(append처럼) -->
	<!-- 통상 body를 대상으로 적용 -->
	<Teleport to="body">
		<div
			v-if="modelValue"
			class="modal"
		>
			<!-- false를 명시적으로 표현, 안쓰면 undefined되면서 falsy가 된다 -->
			<div
				@click="$emit('update:modelValue', false)"
				class="bg"
			></div>
			<div class="contents">
				<slot></slot>
			</div>
		</div>
	</Teleport>
</template>


<script>
	export default {
		props: {
			// v-model로 컴포넌트 연결했으니 modelValue로 받자
			modelValue: {
				type: Boolean,
				required: true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.contents {
			width: 200px;
			max-height: calc(100% - 100px);
			background-color: #fff;
			position: relative;
			overflow: auto;
		}
	}
</style>