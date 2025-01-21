import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <p className="lead">การวินิจฉัยระบบองค์การภาครัฐ</p>

              <p>
                <strong>ทฤษฎีระบบ สามารถสรุปได้ดังนี้</strong>
                <ul className="ml-4"></ul>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>องค์การเป็นระบบที่มีขอบเขต</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      Inputs คือ วัตถุดิบ Suppliers เงินทุน/แหล่งทุน
                      ความสามารถของพนักงาน ผู้ถือหุ้น นโยบายของรัฐบาล
                      และกฎระเบียบต่างๆ
                    </li>
                    <li>
                      Throughputs/Transformation Process คือกระบวนการทำงาน
                      กระบวนการแปลง Inputs เป็น Outputs
                    </li>
                    <li>Outputs คือสิ้นค้า บริการ ข้อมูล ฯลฯ</li>
                  </ul>

                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การทำหน้าที่ในลักษณะที่สอดประสานกัน
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      เพื่อให้บรรลุเป้าหมายขององค์การทุกส่วนของระบบล้วนมีความเกี่ยวข้องกันเมื่อส่วนใดส่วนหนึ่งถูกเปลี่ยนแปลง
                      ส่วนอื่นๆ ก็จะได้รับผลกระทบ
                    </li>
                  </ul>
                  <li>
                    กระบวนการภายในองค์การ จำเป็นต่อประสิทธิภาพและประสิทธิผล
                    รวมทั้งความสำเร็จขององค์การ
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>กระบวนการผลิต ซึ่งรวบรวมและแปลง Inputs เป็น Outputs</li>
                    <li>
                      กระบวนการสังคม เกี่ยวข้องกับบุคคลและกลุ่มต่างๆ
                      จนทำให้เกิดบรรทัดฐาน
                    </li>
                    <li>
                      กระบวนการตอบสนองความต้องการของแต่ละบุคคล
                      ซึ่งมีอิทธิพลต่อความรู้สึกและความมุ่งมั่นของมนุษย์
                    </li>
                  </ul>
                  <li>องค์การและระบบย่อยทั้งหมดขององค์การ</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      เป็นหน่วยหนึ่งอยู่ภายใต้อิทธิพลของสิ่งแวดล้อมที่สามารถส่งผลกระทบทั้งด้านบวกและลบต่อหน่วยนั้นๆ
                    </li>
                  </ul>
                  <li>
                    องค์การได้รับข้อมูลป้อนกลับ (Feedback) เกี่ยวกับ Outputs
                    ของตนจากสิ่งแวดล้อม
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      ซึ่งช่วยให้องค์การสามารถดำเนินการเปลี่ยนแปลงต่างๆ
                      เพื่อให้การตอบสนองต่อสิ่งแวดล้อมดีขึ้น
                      โดยข้อมูลป้อนกลับจากลูกค้าเป็นสิ่งที่จำเป็นต่อความสำเร็จในระยะยาวขององค์การมากที่สุด
                    </li>
                  </ul>
                </ol>
                <ul className="ml-4"></ul>
                <strong>การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model</strong>
                <ul className="ml-4"></ul>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>มีความชัดเจน</li>
                    <li>ได้รับการยอมรับจากพนักงานหรือไม่</li>
                  </ul>

                  <li>โครงสร้าง (Structure)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      กิจกรรม/งานต่างๆ
                      ถูกแบ่งในลักษณะใดช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                    </li>
                  </ul>
                  <li>ความสัมพันธ์ (Relationships)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่หรือก่อให้เกิดความขัดแย้งอย่างไรและจัดการกับความขัดแย้งนั้นอย่างไร
                    </li>
                  </ul>
                  <li>รางวัล (Rewards)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่หรือมีมาตรการลงโทษอย่างไร
                    </li>
                  </ul>
                  <li>การนำ (Leadership)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      นำการขับเคลื่อนองค์การมีหน้าที่กำกับติดตามความเป็นไป
                      หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน
                    </li>
                  </ul>
                  <li>กลไกที่จำเป็น (Helpful Mechanism)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      องค์การมีเครื่องมือหรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                      อย่างเพียงพอหรือไม่
                    </li>
                  </ul>
                </ol>
                <strong>ข้อดี ข้อเสียของ Model</strong>
                <ul className="ml-4"></ul>
                ข้อดี
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>คือเป็น Model ที่เข้าใจง่าย</li>
                </ul>
                <ul className="ml-4"></ul>
                ข้อเสีย
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>
                    เป็นการวินิจฉัยระบบที่ขาดความรอบด้านเนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจนรวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม
                  </li>
                </ul>
              </p>
              <p>
                Sapibulumnibh phasellus nulla egestibulum enim pretium elit
                tincidunt estiquam ultrisque donectetur. Sedcondimentumsan odio
                hendrerit proin vitae dignis nibh ac justo id congue.
                Amesintesque vel curabitae volutpat donec alique
                nasceleifendimentesque montesque rhoncus quis eros. Vestnunc
                nonummy
              </p>
              <p>
                Montegeraliquam sed pede in cursus praesenec vestas rhoncus wisi
                at wisi. Condisseloborttis enim et ipsum mauristie id felit
                adipiscipit ac auctortorttitor sempor. Vitantesqueat sempus non
                sed et mus sit vivamus purus netus hendiment. Pretiuma diam et
                id tempus dolor por wisi sed volutpat facilisi.
              </p>
              <p>
                Wisiet sus adipit phasellentum elit condissim consecteturpiscing
                sapien vivamus et congue. Utvel tris quismod cursus liberos elit
                nisse curabitur tur parturpis tellenterdum. Semperligula
                curabitae tellentesque nulla trices vestas ristibulum id justo
                auctor facinia. Natisdonec consequat nibh pellus.
              </p>
              <p>
                Vestibusodio euisque id elerisus lacus tincidunt sit malesuada
                lacus pellus parturpiscing. Pellenterdumat maecenatoque cras a
                magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
                eget temper lacus vestibus velit lacus venean. Magnaipsum tellus
                morbi leo aliquat nulla convallis pellentesque.
              </p>
            </div>
          </div>
          {/* <div id="navigation">
      <p>
        <strong>Navigation Here</strong>
      </p>
      <ul>
        <li>
          <a href="http://www.free-css.com/">Free CSS Templates</a>
        </li>
        <li>
          <a href="http://www.free-css.com/free-css-layouts.php">
            Free CSS Layouts
          </a>
        </li>
      </ul>
    </div> */}
          {/* <div id="extra">
      <p>
        <strong>More stuff here.</strong>
      </p>
      <p>
        sit malesuada lacus pellus parturpiscing. Pellenterdumat maecenatoque
        cras a magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
        eget temper lacus vestibus velit lacus venean. Magnaipsum tellus morbi
        leo aliquat nulla convallis pellentesque.
      </p>
    </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}
