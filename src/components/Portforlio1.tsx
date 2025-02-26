import Link from "next/link";
import React from "react";

export default function Portforlio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองคืการภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  การบริหารงานภาครัฐแนวใหม่ (New Public Management) คือ
                  การปรับเปลี่ยนการบริหารจัดการภาครัฐโดยนำหลักการเพิ่มประสิทธิภาพของระบบราชการและการแสวงหาประสิทธิภาพในการปฏิบัติราชการที่มุ่งสู่ความเป็นเลิศ
                  โดยการนำเอาแนวทางหรือวิธีการบริหารงานของภาคเอกชนมาปรับใช้กับการบริหารงานภาครัฐ
                  เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ
                  การคำนึงถึงหลักความคุ้มค่า
                  การจัดการโครงสร้างที่กะทัดรัดและแนวราบ
                  การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ
                  การให้ความสำคัญต่อค่านิยม จรรยาบรรณวิชาชีพ คุณธรรมและจริยธรรม
                  ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
                </p>
                <p>
                  หลักใหญ่ของการจัดการภาครัฐแนวใหม่ คือ
                  การเปลี่ยนระบบราชการที่เน้นระเบียบและขั้นตอนไปสู่การบริหารแบบใหม่ซึ่งเน้นผลสำเร็จและความรับผิดชอบ
                  รวมทั้งใช้เทคนิคและวิธีการของเอกชนมาปรับปรุงการทำงาน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะภายในภาครัฐ
                </h3>
                <p>
                  คำว่า "การเปลี่ยนผ่านสู่ระบบดิจิทัล" อธิบายถึงการนำเทคโนโลยี
                  ความสามารถ และกระบวนการใหม่ ๆ
                  เข้ามาใช้เพื่อทำให้ยังคงสามารถแข่งขันได้ในภูมิทัศน์ทางเทคโนโลยีที่มีการเปลี่ยนแปลงอยู่ตลอดเวลา
                  หลังจากยุคการระบาดครั้งใหญ่
                  องค์กรต้องมีความสามารถที่จะปรับตัวได้อย่างรวดเร็วเพื่อให้เข้ากับการเปลี่ยนแปลงต่าง
                  ๆ
                </p>
                <p>
                  เทคโนโลยีเกิดใหม่ เช่น บริการบนคลาวด์
                  สามารถช่วยประหยัดเวลาและปรับปรุงประสิทธิภาพในทุกด้านของกระบวนการธุรกิจ
                  ตัวอย่างเช่น การใช้เทคโนโลยีดิจิทัล เช่น ปัญญาประดิษฐ์
                  ช่วยให้พนักงานมีอิสระในการมุ่งเน้นไปที่งานที่ต้องใช้ความคิดสร้างสรรค์และการแก้ปัญหา
                  ในทำนองเดียวกัน
                  การวิเคราะห์ข้อมูลด้วยแมชชีนเลิร์นนิงสามารถให้ข้อมูลเชิงลึกเพื่อให้คุณบรรลุเป้าหมายทางธุรกิจได้เร็วขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลงภายในภาครัฐ{" "}
                </h3>
                <p>
                  เรียนรู้ปัจจัยสร้างการเปลี่ยนแปลง บริหารอนาคต และความไม่แน่นอน
                  อย่างมีทิศทาง
                </p>
                <p>
                  การเปลี่ยนแปลงที่เกิดขึ้นอย่างรวดเร็ว รุนแรงในทุกด้าน
                  ทั้งเศรษฐกิจ สังคม เทคโนโลยี สิ่งแวดล้อม รวมถึงการเกิดโรคระบาด
                  โควิด-19 ส่งผลกระทบอย่างที่คาดไม่ถึงต่อทุกภาคส่วน
                  การวิเคราะห์สถานการณ์ ปรับมุมมอง เปลี่ยนกลยุทธ์
                  เพื่อให้เท่าทันต่อการเปลี่ยนแปลงและสามารถช่วงชิงความได้เปรียบจากคู่แข่ง
                  กระบวนการบริหารจัดการการเปลี่ยนแปลง หรือ Change Management
                  Process จึงเป็นเครื่องมือสำคัญที่จะช่วยองค์กร
                  สามารถลำดับขั้นตอนการบริหารการเปลี่ยนแปลงอย่างมีทิศทาง มี
                  Roadmap ที่ชัดเจนในการปรับปรุงอย่างต่อเนื่อง
                  เพื่อลดผลกระทบที่เกิดขึ้น
                  สนับสนุนให้เกิดการปรับตัวและการยอมรับ
                  พร้อมทั้งสร้างศักยภาพใหม่ๆ
                  เพื่อรองรับการเปลี่ยนแปลงที่เกิดขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลงภายในภาครัฐ </h3>
                <p>
                  คุณพร้อมไหม? …นักจิตวิทยาพร้อมจะช่วย
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3> ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลงภายในภาครัฐ </h3>

                <p>
                  <Link
                    href="https://service.surveycan.com/demosurvey/government/government.html "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การทำการสำรวจความพึงพอใจต่อการให้บริการภาครัฐนั้น
                    มีความสำคัญไม่น้อยในการบริหารจัดการคุณภาพบริการของภาครัฐ
                    ภาครัฐได้กำหนดกรอบหลักเกณฑ์ในการยกระดับคุณภาพการให้บริการ
                    โดยยึดถือความต้องการของผู้รับบริการและผู้มีส่วนได้ส่วนเสียเป็นสำัคัญ
                    ในการขับเคลื่อนยุทธศาสตร์ขององค์กร
                    การสำรวจความพึงพอใจจึงมีบทบาทสำคัญในการวิเคราะห์ความต้องการของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
                    เพื่อนำมาปรับกระบวนการและนโยบายขององค์กรต่อไปได้
                    อย่างมีประสิทธิภาพ
                  </Link>
                </p>
                <p>
                  แบบสำรวจความพึงพอใจของบุคลากรภาครัฐ
                  เป็นช่องทางหนึ่งที่ทำให้หน่วยงานทราบถึงความพึงพอใจของบุคลากรในองค์กรได้
                  ผู้บริหารของหน่วยงานหรือฝ่ายการเจ้าหน้าที่สามารถนำข้อมูลดังกล่าวมาประเมิน
                  วิเคราะห์ถึงแผนการที่จะพัฒนาด้านทรัพยากรบุคลากรได้อย่างมีประสิทธิภาพได้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การต่อต้านการเปลี่ยนแปลงภายในภาครัฐ (Resistance to Change)
                </h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง คือ
                  การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                  เพื่อรองรับการเติบโต หรือเพื่อความอยู่รอดขององค์กร
                  แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว
                  ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น
                  การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
                  การปรับเปลี่ยนกลยุทธ์ทางการตลาด
                  หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-86-89.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลงภายในภาครัฐ (Overcoming
                  Resistance to Change)
                </h3>
                <p>
                  <Link
                    href="https://brightsidepeople.com/3-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%A2%E0%B8%B1%E0%B8%87/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    รับมือกับการต่อต้าน “การเปลี่ยนแปลง” อย่างไร?
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลงที่เกิดขึ้น
                  เป็นอุปสรรคตัวสำคัญที่หยุดยั้งนวัตกรรมในองค์กร ลดขวัญกำลังใจ
                  และขัดขวางประสิทธิภาพการทำงาน ดังนั้น
                  การจัดการกับปัญหาเหล่านี้อย่างมีประสิทธิภาพคือกุญแจสำคัญในการสร้างวัฒนธรรมองค์กรที่ยืดหยุ่นและพร้อมต่อการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-90-92.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลงภายในภาครัฐ (Creating a
                  Vision to Change)
                </h3>
                <p>
                  <Link
                    href="https://brightsidepeople.com/3-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%A2%E0%B8%B1%E0%B8%87/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ความสามารถขององค์กรในการเผชิญกับการเปลี่ยนแปลง{" "}
                  </Link>
                </p>
                <p>
                  การแก้ไขปัญหาอย่างเป็นระบบ
                  มีการเก็บรวบรวมข้อมูลอย่างเป็นระบบเพื่อใช้ในการตั้งสมมติฐานแก้ไขปัญหาและตัดสินใจ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-93-98.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  ขั้นตอนการกำหนดวิสัยทัศน์ภายในภาครัฐ (Steps of Creating a
                  Vision)
                </h3>
                <p>
                  <Link
                    href="E0%B8https://www.popticles.com/branding/how-to-write-effective-vision-statement/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ขั้นตอนการสร้าง Vision Statement
                  </Link>
                </p>
                <p>
                  <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                    <li>ระบุให้ได้ว่าทำไมคุณถึงเกิดมาบนโลกใบนี้</li>
                    <li>
                      ระบุให้ชัดเจนว่าคุณจะทำอะไรบ้างเพื่อตอบเหตุผลว่าทำไมถึงมีคุณบนโลกใบนี้
                    </li>
                    <li>เตรียมวางกรอบแนวคิดด้านคุณค่าที่จะมอบให้ลูกค้า</li>
                    <li>มองและวางแผนถึงอนาคตที่คุณวาดฝันเอาไว้</li>
                    <li>
                      เชื่อมทุกอย่างเข้าด้วยกันแล้วนำมาเรียบเรียงเป็น Vision
                      Statement
                    </li>
                  </ol>
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-99-102.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสียภายในภาครัฐ (Identifying Key
                  Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://thailandpolicylab.com/stakeholder-analysis/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ทำความรู้จักมนุษย์ให้ดีขึ้นด้วย
                    “การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย”
                  </Link>
                </p>
                <p>
                  ผู้มีส่วนได้ส่วนเสียแต่ละคนมีอัตลักษณ์อันจำเพาะ มีความต้องการ
                  ลำดับความสำคัญ ความสนใจ และแรงจูงใจที่แตกต่างกันไป
                  หากเรารู้จักผู้มีส่วนได้ส่วนเสียอย่างถ่องแท้
                  เราก็จะมีข้อมูลเชิงลึกว่าจะต้องทำอย่างไรจึงจะได้การสนับสนุนจากพวกเขา
                  เราจะมองเห็นพลวัตความสัมพันธ์ของพวกเขาชัดเจนขึ้น
                  เห็นว่าพวกเขามีจุดยืนอย่างไร และมีส่วนร่วมมากเพียงใด
                  นอกจากนี้เรายังสามารถนำความคิดเห็นของผู้มีส่วนได้ส่วนเสียมาเป็นส่วนหนึ่งของยุทธศาสตร์โครงการ
                  เพื่อทำให้ความสัมพันธ์ระหว่างเรากับผู้มีส่วนได้ส่วนเสียมีความเข้มแข็งตั้งแต่แรกเริ่มโครงการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสียภายในถาครัฐ (Influencing
                  Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://pmithai.org/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%AA/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ขั้นตอนการโน้มน้าวผู้มีส่วนได้ส่วนเสียคือ{" "}
                  </Link>
                </p>
                <p>
                  ขั้นตอนแรกของการบริหารผู้มีส่วนได้ส่วนเสียของโครงการคือการกำหนดผู้มีส่วนได้ส่วนเสียและเข้าใจถึงความต้องการของพวกเขา
                  รวมถึงความเกี่ยวข้อง ความเชื่อมโยง
                  อิทธิพลและผลกระทบต่อความสำเร็จโครงการ
                  สิ่งเหล่านี้จะถูกบันทึกไว้ในการวิเคราะห์ผู้มีส่วนได้ส่วนเสีย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-107-110.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Thiteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลงภายในภาครัฐ
                  (Change-Management Structures)
                </h3>
                <p>
                  {" "}
                  <Link
                    href="http://wiki.kpi.ac.th/index.php?title=%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%81%E0%B8%B2%E0%B8%A3 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    คณะกรรมการพัฒนาระบบราชการ
                  </Link>{" "}
                </p>
                <p>
                  จากที่มีการแก้ไขพระราชบัญญัติบริหารราชการแผ่นดิน พ.ศ.2534
                  โดยพระราชบัญญัติระเบียบบริหารราชการแผ่นดิน (ฉบับที่ 5) พ.ศ.
                  2545
                  ที่กำหนดให้การบริหารราชต้องเป็นไปเพื่อประโยชน์สุขของประชาชน
                  เกิดผลสัมฤทธิ์ต่อภารกิจของรัฐ มีประสิทธิภาพ
                  มีความคุ้มค่าในเชิงภารกิจแห่งรัฐ ลดขั้นตอนการปฏิบัติงาน
                  ลดภารกิจและยุบเลิกหน่วยงานที่ไม่จำเป็น
                  กระจายภารกิจและทรัพยากรไปสู่ท้องถิ่น
                  และให้การปฏิบัติหน้าที่ของส่วนราชการเป็นไปตามวิธีการบริหารกิจการบ้านเมืองที่ดี
                  (Good Governance)
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-111-114.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การประคับประคองการเปลี่ยนแปลงภายในภาครัฐ (Sustaining Momentum)
                </h3>
                <p>
                  <Link
                    href="https://www.ricoh.co.th/features/change-management "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การนำเทคโนโลยีใหม่เข้ามาใช้
                  </Link>{" "}
                </p>
                <p>
                  หากปราศจากแผนงานที่มีทิศทางที่ดี
                  การหยุดชะงักสามารถทำให้ประสิทธิภาพการทำงานลดลงอย่างมากแทนที่จะเพิ่มขึ้น
                  ซึ่งอาจนำไปสู่ความคับข้องใจ
                  ปัญหานี้สามารถเกิดขึ้นได้แม้ว่าเทคโนโลยีใหม่จะทำให้ระบบและเวิร์กโฟลว์ทำงานได้โดยอัตโนมัติเพื่อให้มีขั้นตอนน้อยลงและทำให้ภาระงานง่ายขึ้นก็ตาม
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-115-119.pdf "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
