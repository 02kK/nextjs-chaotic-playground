//　関数宣言をするとグローバルスコープにその関数名のオブジェクトができる（グローバルオブジェクトのプロパティに追加される）
function Rabbit() {}
console.log(Rabbit === window.Rabbit); //true

// グローバルスコープにできたRabbitオブジェクトは関数インスタンスに等しいため、自身を生成したコンストラクタ関数をprototype.constructorプロパティにもつ。
// ここで、コンストラクタオブジェクト（プロトタイプオブジェクト）そのものの.constructorプロパティにはFunctionコンストラクタが設定されていることに注意。　※ネイティブ/カスタムコンストラクタに限らず
// let r = new Rabbit();
Rabbit.constructor;  // ƒ Function() { [native code] }
// r.constructor // ƒ Rabbit() {}
Rabbit.prototype.constructor  // ƒ Rabbit() {}
// r.prototype // undefined (関数インスタンスでないためprototypeプロパティを持たない)

// Rabbitオブジェクトは関数インスタンスのため生成時に.protorypeプロパティが生成され、初期値として.protorype.constructerに自身を生成したコンストラクタ関数が格納される。
// インスタンスオブジェクトが生成される際、内部プロパティ[[Prototype]]には__proto__としてそのオブジェクトのプロトタイプとなった（コンストラクタ関数として使用された）関数が格納される（リンク）。
// コンストラクタオブジェクトの__proto__には初期状態ではObjectが格納されている。（プロトタイプチェーン終端）
Rabbit.prototype;

let rabbit = new Rabbit();
rabbit.constructor;
rabbit.prototype; //rabbitはRabbitプロトタイプオブジェクト（コンストラクター関数）のインスタンスオブジェクトであり、Functionオブジェクトのインスタンスではないため、prototypeプロパティを持たない。

// .__proto__プロパティを使うと自身を生成したプロトタイプオブジェクト（コンストラクタ関数）の.prototypeプロパティにアクセスできる
// オブジェクトは指定されたプロパティを自身が保持しない場合、.__proto__プロパティで生成時に内部的にリンクされているプロトタイプオブジェクトのprototypeプロパティを次に検索する（プロトタイプチェーン）
// ここで注目したいのが、Rabbit.__proto__ != rabbit.__proto__.__proto__ ということである。
// (左辺) = ƒ () { [native code] }            : Functionコンストラクタによってインスタンス化されたため
// (右辺) = Rabbit.prototype.__proto = Object : コンストラクタ関数のprototypeオブジェクト自体はデフォルトでObjectとして生成されているため

// ただし、コンストラクタのインスタンスとして生成されたオブジェクト（ここではrabbit）からプロトタイプチェーンを辿る際には、
// 必ず途中でコンストラクタ.prototype.__proto__ = Object　を通るようになっており、その先のObject.prototype.__proto__ = nullのため必ずチェーン検索は終点に到達するように言語設計されている。
// これは、それがたとえ孫継承されている（コンストラクタ.prototype = 継承元コンストラクタインスタンス）ようなコンストラクタのインスタンスからプロトタイプチェーンを辿るような場合にも同じである。
/**
 * つまり、
 * インスタンスオブジェクトからプロトタイプチェーンを辿る際には、コンストラクタ.__proto__ = ƒ () { [native code] }にアクセスしてしまい、
 * うまくチェーンを辿れない現象は発生し得ないため気にしなくてもOK！
 */

Rabbit.__proto__; // => ネイティブコンストラクタ（プロトタイプオブジェクト）として定義されているFunctionの.prototypeプロパティに等しい => () { [native code] }
rabbit.__proto__.__proto__; 
rabbit.__proto__; // => Rabbit.prototype => {constructor: ƒ Rabbit()}
rabbit.__proto__.__proto__; //  => Rabbit.prototype.__proto__ => Object.prototype => {constructor: ƒ Object()}
rabbit.__proto__.__proto__.__proto__; // Object.prototype.__proto__ === null (プロトタイプチェーン終了)

/**
 * 参考までに...
 * 全てのコンストラクタオブジェクトのconstructorはFunctionオブジェクトである。
 * ネイティブ（関数宣言ずみ）、カスタムに関わらず、コンストラクターオブジェクトは全てFunctionのインスタンスである（表現が正確かはわからない）
 * つまり、全てのコンストラクタのプロトタイプはFunctionである。（実装の際にさまざまなプロパティ（Array.length）などが使えるようにカスタマイズされたFunction）
 * ＝コンストラクタオブジェクト　instanceof Functionは常にtrueである（関数宣言時にグローバルスコープのオブジェクトになっているから調べられる）
 */
 Boolean.constructor; // ƒ Function() { [native code] }
 Function.constructor; // ƒ Function() { [native code] }
 Rabbit.constructor; // ƒ Function() { [native code] }

/**
 * 全てのコンストラクタオブジェクトはFunctionインスタンスであり、生成時に
 * コンストラクタ.prototype.constructor = コンストラクタ（自身のオブジェクト）が初期値で設定される。
 * ただし、Functionオブジェクトだけはptototypeプロパティに匿名関数をもつ。
 * これにより、コンストラクタ.__proto__ = Function.prototype = () { [native code] } となる
 * （コンストラクタ自身から辿らない限りこの悲劇はおこらないため気にしなくて良い）
 */
Boolean.prototype; // {constructor: ƒ Boolean()}
Number.prototype; // {constructor: ƒ Number()}
Array.prototype; // {constructor: ƒ Array()}
Object.prototype; // {constructor: ƒ Object()}
Function.prototype; // () { [native code] } => FunctionオブジェクトのprototypeプロパティだけがObjectオブジェクトでない
RegExp.prototype; // {constructor: ƒ RegExp()}
Window.prototype; // {constructor: ƒ Window()}

Rabbit.prototype; // {constructor: ƒ Rabbit()}



