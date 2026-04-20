import "./main-screen.css";
import backgroundimg from "../assets/main/background.png";
import world from "../assets/main/world.jpg";
import tree from "../assets/main/SVG/tree.svg";
import root1 from "../assets/main/SVG/root1.svg";
import root2 from "../assets/main/SVG/root2.svg";

function MainScreen() {
    return (
        <section className="main-screen">
            {/* Верхняя секция с картинкой 50% высоты */}
            <div className="top-section">
                <img
                    src={world}
                    alt="Top background"
                    className="top-bg"
                />
                {/* Центральная картинка с регулируемым положением */}

            </div>
            <img
                src={tree}
                alt="Center image"
                className="center-image"
                style={{ top: "40%" }}
            />

            {/* Нижняя секция с фоновой картинкой */}
            <div className="bottom-section">
                <img
                    src={backgroundimg}
                    alt="Bottom background"
                    className="bottom-bg"
                />

                {/* Чередующиеся блоки с нахлестом */}
                <div className="blocks-container">
                    <div className="block block-1">
                        <img
                            src={root1}
                            alt="Bottom background"
                            className="root1"
                        />
                    </div>

                    <div className="block block-2">
                        <img
                            src={root2}
                            alt="Bottom background"
                            className="root2"
                        />
                    </div>

                    <div className="block block-1">
                        <img
                            src={root1}
                            alt="Bottom background"
                            className="root1"
                        />
                    </div>
                    <div className="block block-2">
                        <img
                            src={root2}
                            alt="Bottom background"
                            className="root2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainScreen;