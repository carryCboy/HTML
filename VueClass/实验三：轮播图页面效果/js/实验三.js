const app = Vue.createApp({
	data() {
	  return {
		slideList: [
		  { image: './img/1.jpeg', desc: '美食', clickURL: '#' },
		  { image: './img/2.webp', desc: '旅游', clickURL: '#' },
		  { image: './img/3.webp', desc: '电影', clickURL: '#' },
		  { image: './img/4.webp', desc: '读书', clickURL: '#' },
		  { image: './img/5.webp', desc: '读书', clickURL: '#' },
		  { image: './img/6.webp', desc: '读书', clickURL: '#' },
		],
		currentIndex: 0,
		timer: null,
		delay: 3000,
	  }
	},
	methods: {
	  // 切换轮播图
	  change(index) {
		this.currentIndex = index % this.slideList.length;
	  },
	  // 鼠标悬停停止轮播图
	  stop() {
		clearInterval(this.timer);
		this.timer = null;
	  },
	  // 鼠标离开重新开启轮播图
	  go() {
		if (!this.timer) {
		  this.timer = setInterval(() => {
			this.currentIndex = (this.currentIndex + 1) % this.slideList.length;
		  }, this.delay);
		}
	  }
	},
	mounted() {
		this.timer = setInterval(() => {
		  this.currentIndex++;
		}, 4000)
	   },
	   hover(bool) {
		if (bool) {
		  clearInterval(this.timer);
		} else {
		  this.timer = setInterval(() => {
			this.currentIndex++;
		  }, 4000)
		}
	}

  })
  
  app.mount('#app');
  