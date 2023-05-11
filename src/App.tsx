import { useMultistepForm } from "./useMultistepForm";

function App() {
    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next,
    } = useMultistepForm([<div>One</div>, <div>Two</div>, <div>Three</div>]);
    return (
        <div
            style={{
                position: "relative",
                background: "white",
                border: "1px solid black",
                padding: "2rem",
                margin: "1rem",
                borderRadius: "10px",
                fontFamily: "Arial",
            }}
        >
            <form action="">
                <div
                    style={{
                        position: "absolute",
                        top: ".5rem",
                        right: ".5rem",
                    }}
                >
                    {currentStepIndex + 1}/{steps.length}
                </div>
                {step}
                <div
                    style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "flex-end",
                    }}
                >
                    {!isFirstStep && (
                        <button type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    {!isLastStep && (
                        <button type="button" onClick={next}>
                            Next
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default App;
