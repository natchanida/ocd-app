import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
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
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสเมื่อ 18 ธันวาคม 2567 โดยนัฐชนิดา นามเสาร์</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่
              <ol className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                <li>การกำหนดรูปแบบในการพัฒนาองค์การ</li>
                <li>
                  การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                  และตัวชี้วัดให้ชัดเจน (KPI)
                </li>
                <li>มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                <li>มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
              </ol>
              <p className="lead">OD: การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การคือ
                <ol className="ml-4" style={{ listStyleType: "upper-latin" }}>
                  <li>การกระทำที่มีการวางแผนล่วงหน้า</li>
                  <li>นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li>บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    การเปลี่ยนแปลงวัฒนธรรม เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    ระบบการวางแผนลยุทธ์ด้าน Behavioral Science สร้างความเข้าใจ
                    ในพัฒนาและเปลี่ยนแปลงองค์การ เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ol>
                <p className="lead">OD มีรากฐานมาจากอะไร</p>
                OD มีรากฐานมาจาก
                <ol className="ml-4" style={{ listStyleType: "square" }}>
                  <li>สังคมวิทยา (Sociology)</li>
                  <li>พฤติกรรมศาสตร์ (Behavioral Sciences)</li>
                </ol>
              </p>
              <p className="lead">
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย
              </p>
              <ol className="ml-4" style={{ listStyleType: "upper-roman" }}>
                <li>จิตวิทยาสังคม (Social Psychology)</li>
                <li>กระบวนการกลุ่ม (Group Dynamics)</li>
                <li>
                  จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                  Psychology)
                </li>
                <li>
                  ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management Theory)
                </li>
                <li>พฤติกรรมองค์การ (Organization Behavior)</li>
                <li>สังคมวิทยา (Sociology)</li>
                <li>จิตบำบัด (Psychotherapy)</li>
              </ol>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              ธรรมชาติของ OD (The Nature of OD)
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                  เป็นแกนกลางหรือแกนหลัก
                </li>
                <li>เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                <li>
                  ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                  บุคคล ชุมชน ประเทศ ภูมิภาค
                </li>
                <li>OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                <li>OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                <li>OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                <li>OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                <li>
                  OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                </li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>ค่านิยม (Values)</li>
                  <li>ทัศนคติ (Attitudes)</li>
                  <li>บรรทัดฐาน (Norms)</li>
                  <li>วิธีการบริหารจัดการ (Management Practices)</li>
                </ul>
                <li>ผู้มีบทบาทสำคัญในการทำ OD</li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                  <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                  <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                  <li>อาจารย์ (Teacher)</li>
                  <li>ผู้ฝึกสอน (Coach)</li>
                </ul>
                <li>OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                <li>
                  OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                  หรือโครงสร้างขององค์การ
                </li>
              </ol>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์ </li>
                โครงสร้างและ/หรือกระบวนการของระบบทั้งระบบมีความหมายครอบคลุมตั้งแต่องค์การ
                ฝ่ายหรือกลุ่มงาน
                <li>
                  OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                  Behavioral Science ให้กับสมาชิกขององค์การ เช่น{" "}
                </li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>ภาวะผู้นำ</li>
                  <li>กระบวนการกลุ่ม</li>
                  <li>การออกแบบงาน</li>
                  <li>กลยุทธ์</li>
                  <li>รูปแบบองค์การ</li>
                  <li>ความสัมพันธ์ระหว่างประเทศ เป็นต้น</li>
                </ul>
                <li>OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้ </li>
                <li>
                  OD
                  เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                </li>
                <li>OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
              </ol>
              <p className="lead">
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
              </p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  ความเข้าใจในระบบสังคม (Understanding social systems)
                  คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                  เช่น{" "}
                </li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>จิตวิทยา</li>
                  <li>จิตวิทยาสังคม</li>
                  <li>สังคมวิทยา</li>
                  <li>รัฐศาสตร์</li>
                  <li>เศรษฐศาสตร์</li>
                  <li>ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น</li>
                </ul>
                <li>เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง </li>
                <li>
                  เข้าใจบทบาทบุคคลที่สาม (Third Party)
                  ของที่ปรึกษาด้านการเปลี่ยนแปลง
                </li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>
                    บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                    เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                  </li>
                </ul>
              </ol>
              <p className="lead">ค่านิยมของ OD (OD Values)</p>
              ค่านิยมของ OD
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                  Dignity)
                </li>
                <li>การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented)</li>
                <li>ความเท่าเทียม (Democracy)</li>
                <li>ความสุจริต (Honesty)</li>
                <li>การกระจายอำนาจ (Empowerment)</li>
                <li>ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                <li>มีจิตช่วยเหลือ (Being Helpful)</li>
              </ol>
              <p className="lead">สรุปค่านิยมของ OD ที่สำคัญ ได้แก่ </p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)</li>
                <li>การให้ความร่วมมือ (Collaboration)</li>
                <li>ความจริงใจ (Authenticity)</li>
                <li>ความเข้าใจในตนเอง (Self-awareness)</li>
                <li>การกระจายอำนาจ (Empowerment)</li>
                <li>
                  ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                  Justice)
                </li>
              </ol>
              <p className="lead">
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
              </p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  OD
                  ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                  ส่วน CM
                  ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                </li>
                <li>
                  OD มุ่งไปที่พลวัตของระบบในองค์การ
                  ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                  สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้นส่วน CM
                  มุ่งไปที่ผลลัพธ์มากกว่า
                </li>
                <li>
                  OD
                  ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้องในตนเอง
                  ส่วน CM
                  เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ(Self-awareness)
                </li>
                <li>
                  OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                  การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                  เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ
                  ทางสังคมส่วน CM
                  จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ{" "}
                </li>
              </ol>
              <p className="lead">
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM)
              </p>
              1.OD
              <ol className="ml-4" style={{ listStyleType: "square" }}>
                <li>การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</li>
                <li>
                  การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD
                </li>
              </ol>
              ส่วน CM
              <ol className="ml-4" style={{ listStyleType: "square" }}>
                <li>การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ</li>
                <li>เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</li>
              </ol>
              2.OD
              <ol className="ml-4" style={{ listStyleType: "square" }}>
                <li>
                  ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                  กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                </li>
                <li>
                  ถ่ายทอดความรู้
                  และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                </li>
              </ol>
              ส่วน CM
              <ol className="ml-4" style={{ listStyleType: "square" }}>
                <li>มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</li>
                <li>ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
              </ol>
              <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>
                  มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                  Background หรือ T-group)
                </li>
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                <li>มาจากรากฐาน Action Research และ Survey Feedback</li>
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                <li>มาจากรากฐาน Normative Background</li>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>
                    แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว (One
                    Best Way) ในการบริหารองค์การ
                  </li>
                  <li>รูปแบบการจัดการแบบมีส่วนร่วม</li>
                  <li>หลักการของตาข่าย (เครือข่าย)</li>
                </ul>
                <li>
                  มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity และ
                  Quality-of-Work-Life)
                </li>
                1)
                มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                2) เน้นการมีส่วนร่วมของพนักงาน
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                3) การจัดการทั่วทั้งองค์การ (Total Quality Management)
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย </li>
                  <li>
                    Quality = คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ
                  </li>
                  <li>Management = การบริหารองค์การ</li>
                </ul>
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                4) คุณภาพชีวิตในการทำงาน (Quality of Work Life)
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                5) มาจากรากฐาน Strategic Change
              </ol>
              <p className="lead">
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
              </p>
              <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                <li>รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin’s Change Model)</li>
                <li>รูปแบบ Action Research (Action Research Model)</li>
                Action Research (การวิจัยเชิงปฏิบัติการ)
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>
                    เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                  </li>
                  <li>
                    แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                  </li>
                </ul>
                Action Research มี 8 ขั้นตอน ดังนี้
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>การรับรู้ปัญหา (Problem Identification)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      เป็นขั้นตอนที่ผู้บริหาร
                      หรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหาและต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว
                    </li>
                  </ul>
                  <li>
                    การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ (Consultation
                    with a Behavioral Sciences Export)
                  </li>
                  <li>
                    การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data Gathering and
                    Preliminary Diagnosis)
                  </li>
                  <li>
                    การป้อนกลับข้อมูลและผลการวิเคราะห์ให้ตัวแทนองค์การ (Feedback
                    to a Key Client or Group)
                  </li>
                  <li>
                    การวิเคราะห์ปัญหาร่วมกัน (Joint Diagnosis of the Problem)
                  </li>
                  <li>การวางแผนปฏิบัติร่วมกัน (Joint Action Planning)</li>
                  <li>การดำเนินการตามแผนปฏิบัติการ (Action)</li>
                  <li>
                    การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after
                    Action) (Action)
                  </li>
                </ol>
                <li>
                  รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of
                  Planned Change)
                </li>
                <li>
                  แนวคิดเชิงบวกเกี่ยวกับองค์การ และรูปแบบการเปลี่ยนแปลงเชิงบวก
                  (Positive Organizational Scholarship (POS) and Appreciative
                  Inquiry (AI))
                </li>
                <ol className="ml-1" style={{ listStyleType: "square" }}></ol>
                <ul>
                  แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                  Organizational Scholarship (POS)
                </ul>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การเบี่ยงเบนเชิงบวก (Positive Deviance)
                    ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น
                  </li>
                  <li>
                    การมุ่งปัจจัยด้านบวก (An Affirmative orientation)
                    การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน
                    หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา
                  </li>
                  <li>
                    ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม (Virtuousness)
                    และการยกระดับกระบวนการต่างๆ (Elevating Process) เช่น
                    การทำความดีและทำอย่างมีประสิทธิภาพ
                  </li>
                  <ul>
                    หลักการพื้นฐานของ POS
                    (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                    Organizational Scholarship)
                  </ul>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>การเบี่ยงเบนเชิงลบ (Negative Deviance)</li>

                    <li>ปกติ (Ordinary)</li>
                    <li>การเบี่ยงเบนเชิงบวก (Positive Deviance)</li>
                  </ul>
                </ol>
              </ol>
              <p className="lead">
                ที่ปรึกษาด้านการพัฒนาองค์การ (OD Practitioner)
              </p>
              <p>
                <ul className="ml-4" style={{ listStyleType: "square" }}>
                  <li>OD Practitioner</li>

                  <li>OD Consultants</li>
                  <li>OD Expert</li>
                  <li>Change Agent</li>
                  <li>Change Leader</li>
                </ul>
                <p className="lead">บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ</p>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่
                  </li>
                  1. ลูกค้า (Client) หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่
                  ประธาน รองประธานอาวุโส ผู้จัดการ พนักงาน ฯลฯ
                  ที่ต้องการเปลี่ยนแปลงและติดต่อขอความช่วยเหลือจากผู้อื่น
                  โดยมีบทบาท ดังนี้
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>แสดงออกถึงความไม่พอใจในสถานะเดิม (Status Quo)</li>

                    <li>จินตนาการถึงความเป็นไปได้ของสิ่งที่แตกต่างจากเดิม</li>
                    <li>สนับสนุนโครงการตั้งแต่เริ่มต้นจนเสร็จสิ้น</li>
                  </ul>
                  <li>ที่ปรึกษาด้านการพัฒนาองค์การ (Change Consultant)</li>
                  ที่ปรึกษาด้านการพัฒนาองค์การ (Change Consultant)
                  คือผู้ที่มีบทบาทคล้ายกับสถาปนิก (Architect)
                  ของกระบวนการเปลี่ยนแปลง เพื่อตอบสนองปัจจัยทางการเงิน การเมือง
                  เทคนิค วัฒนธรรม โครงสร้างและจิตวิญญาณ โดยมีบทบาท ดังนี้
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      แปลงความต้องการของลูกค้าเป็นแผนการเปลี่ยนแปลงเบื้องต้น
                    </li>
                    <li>
                      ให้การสนับสนุนความรู้ด้านเทคนิคในการออกแบบและการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ
                    </li>
                    <li>
                      พิจารณาความพร้อมในการเปลี่ยนแปลง และดำเนินการต่างๆ
                      เพื่อเพิ่มความพร้อมดังกล่าวหากจำเป็น
                    </li>
                    <li>
                      ให้คำแนะนำผู้นำองค์การ Champions
                      และทีมที่ดำเนินการเปลี่ยนแปลง รวมทั้งการจัดการต่อต้าน
                    </li>
                    <li>
                      เป็นผู้นำในการสื่อสารการเปลี่ยนแปลง
                      และทำให้กระบวนการเปลี่ยนแปลงสอดคล้องกับระบบในระหว่างดำเนินการเปลี่ยนแปลง
                    </li>
                  </ul>
                  <li>
                    ขวัญใจพนักงาน (Champions) คือผู้ที่เคยประสบความสำเร็จ
                    มีบทบาท ดังนี้
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      รับผิดชอบงานหนึ่งๆ
                      เกี่ยวกับการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ
                    </li>
                    <li>
                      ให้ข้อมูลป้อนกลับเกี่ยวกับกระบวนการเปลี่ยนแปลง
                      ริเริ่มแก้ไข
                      ปรับเปลี่ยนรายละเอียดในตอนกลางของการเปลี่ยนแปลง
                    </li>
                    <li>ตรวจสอบความถูกต้องของกระบวนการเปลี่ยนแปลง</li>
                    <li>กำหนดวิธีการทำงาน</li>
                    <li>
                      รับผิดชอบการบริหารการเปลี่ยนแปลงในหน่วยงานที่อยู่ในความรับผิดชอบ
                    </li>
                    <li>
                      โน้มน้าวให้พนักงานจำนวนมากเข้าร่วมผลักดันการเปลี่ยนแปลงให้ประสบความสำเร็จ
                    </li>
                    <li>
                      ใช้ข้อมูลสร้างความมั่นใจ ตอบสนองต่อการต่อต้าน
                      และปรับแผนการเปลี่ยนแปลงให้สอดคล้องกับความคิดเห็นของผู้ต่อต้าน
                    </li>
                    <li>เฉลิมฉลองความสำเร็จ</li>
                  </ul>
                  <li>พนักงานและผู้จัดการ (Staff and Managers)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      ให้ข้อมูลเกี่ยวกับสิ่งที่ต้องการเปลี่ยนแปลงและวิธีการเปลี่ยนแปลงสิ่งนั้น
                    </li>
                    <li>
                      ใช้ความเชี่ยวชาญของตนในการช่วยรักษาผลของการเปลี่ยนแปลง
                    </li>
                    <li>
                      ปฏิบัติงานในความรับผิดชอบเพื่อตรวจสอบกระบวนการเปลี่ยนแปลง
                    </li>
                    <li>เฉลิมฉลองความสำเร็จ</li>
                  </ul>
                </ol>
                <p className="lead">
                  ที่ปรึกษาภายในและภายนอก (Internal and External Practitioners)
                </p>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>ที่ปรึกษาภายนอก ได้แก่</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>บุคคลที่ได้รับการว่าจ้างให้ช่วยเปลี่ยนแปลงองค์การ</li>
                    <li>พนักงานบริษัทที่ให้คำปรึกษา (Consulting Firm)</li>
                    <li>บุคลากรของมหาวิทยาลัย หรือวิทยากรที่ปรึกษาอิสระ</li>
                  </ul>
                  <li>ที่ปรึกษาภายใน ได้แก่</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      บุคลากรขององค์การทั้งที่ที่ปฏิบัติงานด้าน OD โดยเฉพาะ
                    </li>
                    <li>หรือที่ปฏิบัติงานด้านอื่นร่วม เช่น</li>
                    <li>งานด้านฝึกอบรม งานด้านทรัพยากรมนุษย์</li>
                  </ul>
                </ol>
                <p className="lead">
                  คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of
                  Practitioners)
                </p>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                    ด้านการบริหารอารมณ์ความรู้สึกของตนเอง
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ความรับผิดชอบในการให้ความช่วยเหลือผู้อื่น</li>
                    <li>การสร้างความสมดุลระหว่างเหตุผลและอารมณ์</li>
                    <li>การรู้จักบริหารความเครียดของตนเอง</li>
                  </ul>
                  <li>
                    ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal Skills)
                  </li>

                  <li>
                    ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)
                  </li>
                  <li>
                    ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development
                    Theory)
                  </li>
                  <li>เป็นนักวิเคราะห์ (Diagnostician)</li>
                  <li>เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)</li>

                  <li>เป็นนักเปลี่ยนแปลง (Interventionist)</li>
                  <li>เป็นผู้ให้ความรู้หรือนักฝึกอบรม (Educator or Trainer)</li>
                  <li>เป็นผู้อำนวยความสะดวก (Facilitator)</li>
                  <li>เป็นผู้ฝึกสอน (Coach)</li>
                </ol>
                <p className="lead">
                  ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การจะต้องประกอบด้วย
                </p>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>ความรู้ (Knowledge)</li>

                  <li>
                    การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ (Commitment)
                  </li>

                  <li>ความสามารถในการสร้างเครือข่าย (Network Ability)</li>
                  <li>ทักษะในการแสวงหาข้อมูล (Elicitation Skills)</li>
                  <li>
                    ทักษะการประเมินและการบูรณาการ (Evaluation and Integration
                    Skills)
                  </li>
                  <li>
                    ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and Prognosis
                    Skills)
                  </li>
                </ol>
                <p className="lead">
                  จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ(Professional Ethics)
                </p>
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>การสำแดงข้อมูลเท็จ (Misrepresentation)</li>

                  <li>การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data)</li>

                  <li>การบังคับ (Coecion)</li>
                  <li>
                    ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal Conflict)
                  </li>
                  <li>ความไม่พร้อมด้านเทคนิค (Technical Ineptness)</li>
                </ol>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
