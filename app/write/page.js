export default function Write() {
  return (
    <div className="product_post">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="상품명" />
        <input name="price" placeholder="가격" />
        <input name="description" placeholder="상품설명" />
        <button type="submit">Click</button>
      </form>
    </div>
  );
}
