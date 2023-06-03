/** 메인 페이지 */

export default function Home() {
  let name = "soomin";
  let link = "http://google.com";
  return (
    <div>
      <h4 style={{ color: "red", fontSize: "30px" }}>애플후레시</h4>
      <p className="title-sub"> by {name}</p>
      <a href={link}>링크 </a>
    </div>
  );
}
