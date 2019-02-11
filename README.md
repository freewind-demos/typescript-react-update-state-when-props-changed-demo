JavaScript React Update State when Props Changes Demo
=====================================================

通常这个需求是不推荐的，因为容易破坏 one source of truth 的原则。
这种情况最好不要使用state里的数据，而是直接从props中计算出来。

不过，如果一定要使用，可以实现`getDerivedStateFromProps`这个方法，
注意它是`static`的。

详细讨论参见：<https://stackoverflow.com/questions/32414308/updating-state-on-props-change-in-react-form>

```
npm install
npm run demo
```
