<template>
	<!-- <h1>{{msg}}</h1>
	<TextField v-model="msg" /> -->
	<!-- <button @click="compName='ABC'">ABC</button>
	<button @click="compName='XYZ'">XYZ</button>-->
	<div class="box">
		<!-- 컴포넌트에서 v-model -->
		<Modal v-model="isShow">
			<h1> {{ msg }} </h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Accusantium ducimus nesciunt omnis numquam,
				fugit beatae voluptas reiciendis voluptatibus natus praesentium in saepe possimus voluptatem aspernatur provident.
				Similique recusandae in sequi!</p>
		</Modal>
	</div>
	<!-- <Component :is="Modal" /> -->
	<button @click="isShow = true"> On Modal!!!!!!! </button>

</template>
<!-- vuejs에서 제공하는 컴포넌트 Component -->
<script>
	// import TextField from "@/components/TextField.vue";
	// import ABC from "@/components/ABC.vue";
	// import XYZ from "@/components/XYZ.vue";
	import Modal from "@/components/Modal.vue";

	export default {
		components: {
			// TextField,
			// ABC,
			// XYZ,
			Modal,
		},
		data() {
			return {
				msg: "hi hih hi hi",
				compName: "ABC", //초기값은 ABC로
				isShow: false,
			};
		},
	};
</script>



<style scoped lang="scss">
	.box {
		width: 200px;
		height: 200px;
		position: fixed;
		bottom: 0;
		right: 0;
		border: 4px solid;
		background-color: red;
		transform: scale(1);
	}
</style>
