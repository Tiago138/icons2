function Header() {
  return (
    <section>
      <div className="code-el">
        <div className="box-el">
          <p>
            <span className="frost3">&lt;style&gt;</span>
          </p>
          <p>
            <span className="frost3">&emsp;@font-face </span>
            &#123;
          </p>
          <p>
            &emsp;&emsp;font-family:
            <span className="frost2"> openiconic</span>
            <span className="frost3">;</span>
          </p>
          <p>
            &emsp;&emsp;src:
            <span className="frost2"> url</span>(/fonts/open-iconic.woff)
            <span className="frost2"> format</span>("
            <span className="aurora4">woff</span>")
            <span className="frost3">;</span>
          </p>
          <p>
            &emsp;&emsp;font-weight:
            <span className="frost3"> normal;</span>
          </p>
          <p>
            &emsp;&emsp;font-style:
            <span className="frost3"> normal;</span>
          </p>
          <p>&emsp;&#125;</p>
          <p>
            &emsp;.<span className="frost1">icon</span>::
            <span className="frost1">before </span>
            &#123;
          </p>
          <p>
            &emsp;&emsp;font-family:
            <span className="frost2"> openiconic</span>
            <span className="frost3">;</span>
          </p>
          <p>
            &emsp;&emsp;font-size:
            <span className="aurora5"> 48</span>
            <span className="frost3">px;</span>
          </p>
          <p>
            &emsp;&emsp;float:
            <span className="frost3"> left;</span>
          </p>
          <p>
            &emsp;&emsp;margin:
            <span className="aurora5"> 0 5</span>
            <span className="frost3">px;</span>
          </p>
          <p>&emsp;&#125;</p>
          <p>
            &emsp;.<span className="frost1"></span>::
            <span className="frost1">before </span>
            &#123;
          </p>
          <p>
            &emsp;&emsp;content: "<span className="aurora3">\e000</span>"
            <span className="frost3">;</span>
          </p>
          <p>&emsp;&#125;</p>
          <p>
            <span className="frost3">&lt;/style&gt;</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
