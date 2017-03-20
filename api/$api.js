(function (window) {
	
	// 全局对象
	var t = {};
	
	// 是否android 
	var isAndroid = (/android/gi).test(navigator.appVersion);
	
	/**
	 * 处理android localStorage兼容性
	 * @return 
	 */
	var uzStorage = function () {
		var ls = window.localStorage;
		if (isAndroid) {
			ls = os.localStorage();
		}
		return ls;
	}
	
	/**
	 * 处理ajax传入参数
	 * @param {Object} url   url
	 * @param {Object} data  携带数据
	 * @param {Object} fnSuc 回调
	 * @param {Object} dataType 类型： `get`, `post`
	 * @return 
	 */
	function parseArguments(url, data, fnSuc, dataType) {
		// 处理传入参数位置
		if (typeof(data) == 'function') {  // parseArguments('http://xxx.com', function() {}, 'get');
			dataType = fnSuc;
			fnSuc = data;
			data = undefined;
		}
		
		if (typeof(fnSuc) != 'function') { // parseArguments('http://xxx.com', {}, 'get', function() {});
			dataType = fnSuc;
			fnSuc = undefined;
		}
		
		return {
			url: url,
			data: data,
			fnSuc: fnSuc,
			dataType: dataType
		}
	}
	
	/**
	 * 删除出前后端空格 
	 * @param {Object} str 字符串
	 * @return 
	 */
	t.trim = function trim(str) {
		debugger;
		if (String.prototype.trim) {
			return str == null ? '' : String.prototype.trim.call(str);
		} else {
			return str.replace(/(^\s*)|(\s*$)/g, '');
		}
	}
	
	/**
	 * 替换所有空格
	 * @param {Object} str
	 * @return 
	 */
	t.trimAll = function trimAll(str) {
		return str.replace(/\s*/g, '');
	}
	
	
	/**
	 * 是否是元素
	 * @param {Object} obj 当前元素
	 * @return 
	 */
	t.isElement = function (obj) {
		return !!(obj && obj.nodeType == 1);
	}
	
	/**
	 * 是否是对象
	 * @param {Object} obj
	 * @return 
	 */
	t.isArray = function (obj) {
		return Array.isArray ? Array.isArray(obj) : obj instanceof Array; 
	}
	
	/**
	 * 判断是否是空对象
	 * @param {Object} obj
	 * @return 
	 */
	t.isEmptyObject = function (obj) {
		return JSON.stringify(obj) == '{}' ? true : false; 
	}
	
	/**
	 * 添加事件 
	 * @param {Object} el 元素
	 * @param {Object} name 事件名 
	 * @param {Object} fn 回调
	 * @param {Object} useCaptrue 捕获 或者 冒泡
	 */
	t.addEvt = function (el, name, fn, useCaptrue) {
		// 判断是否元素
		if (!t.isElement(el)) {
			console.log('el 参数必须是DOM Element');
			return;
		}
		useCaptrue = useCaptrue || false; // 默认是捕获
		// 判断是否有 addEventListener 
		if (el.addEventListener) {
			el.addEventListener(name, fn, useCaptrue);
		}
	}
	
	/**
	 * 移除事件
	 * @param {Object} el 元素
	 * @param {Object} name 事件名
	 * @param {Object} fn 回调
	 * @param {Object} useCaptrue 捕获 或者 冒泡
	 */
	t.rmEvt = function (el, name, fn, useCaptrue) {
		// 判断是否有元素
		if (!t.isElement(el)) {
			console.log('el 参数必须是DOM Element');
			return;
		}
		useCaptrue = useCaptrue || false; 
		// 移除事件
		if (el.removeEventListener) {
			el.removeEventListener(name, fn, useCaptrue);				
		}
	}
	
	/**
	 * 绑定一次事件
	 * @param {Object} el
	 * @param {Object} name
	 * @param {Object} fn
	 * @param {Object} useCaptrue
	 */
	t.oneEvt = function (el, name, fn, useCaptrue) {
		if (!t.isElement(el)) {
			console.log('el 参数必须是DOM Element');
			return;
		}
		
	}
	
	window.$api = t;
})(window);
