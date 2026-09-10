import { ArrowLeft, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import {
  StyledBackLink,
  StyledForm,
  StyledHeader,
  StyledPage,
  StyledResetButton,
  StyledScoreInput,
  StyledScoreTable,
  StyledSheet,
  StyledTitle,
  StyledTotal,
} from "./practice-green-page.styles";

const frontNine = [22, 12, 18, 10, 14, 8, 22, 12, 18];
const backNine = [10, 14, 8, 22, 12, 18, 10, 14, 8];
const practiceHoles = [...frontNine, ...backNine];

export const PracticeGreenPage = () => {
  const [scores, setScores] = useState<string[]>(() =>
    practiceHoles.map(() => ""),
  );

  const frontTotal = useMemo(
    () =>
      scores
        .slice(0, frontNine.length)
        .reduce((sum, score) => sum + (Number(score) || 0), 0),
    [scores],
  );

  const backTotal = useMemo(
    () =>
      scores
        .slice(frontNine.length)
        .reduce((sum, score) => sum + (Number(score) || 0), 0),
    [scores],
  );

  const hasFrontScores = scores
    .slice(0, frontNine.length)
    .some((score) => score !== "");
  const hasBackScores = scores
    .slice(frontNine.length)
    .some((score) => score !== "");

  const updateScore = (index: number, value: string) => {
    if (!/^(?:|-|-1|-2|[0-3])$/.test(value)) {
      return;
    }

    setScores((currentScores) =>
      currentScores.map((score, scoreIndex) =>
        scoreIndex === index ? value : score,
      ),
    );
  };

  const resetScores = () => {
    setScores(practiceHoles.map(() => ""));
  };

  return (
    <StyledPage>
      <StyledSheet>
        <StyledHeader>
          <StyledBackLink href="/" aria-label="Tillbaka till ronden">
            <ArrowLeft aria-hidden="true" />
            Rond
          </StyledBackLink>
          <StyledTitle>Övningsgreen</StyledTitle>
          <StyledResetButton
            type="button"
            onClick={resetScores}
            aria-label="Nollställ score"
          >
            <RotateCcw aria-hidden="true" />
            Nollställ
          </StyledResetButton>
        </StyledHeader>

        <StyledForm>
          <StyledScoreTable>
            <thead>
              <tr>
                <th scope="col">Hål</th>
                <th scope="col">Längd</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {frontNine.map((length, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{length} m</td>
                  <td>
                    <StyledScoreInput
                      aria-label={`Score för hål ${index + 1}`}
                      inputMode="numeric"
                      min="-2"
                      max="3"
                      name={`score-${index + 1}`}
                      pattern="[0-9]*"
                      type="text"
                      value={scores[index]}
                      onChange={(event) =>
                        updateScore(index, event.target.value)
                      }
                      onBlur={(event) => {
                        if (event.target.value === "-") {
                          updateScore(index, "");
                        }
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2} scope="row">
                  Ut
                </th>
                <StyledTotal>{hasFrontScores ? frontTotal : "–"}</StyledTotal>
              </tr>
            </tfoot>
          </StyledScoreTable>
          <StyledScoreTable>
            <thead>
              <tr>
                <th scope="col">Hål</th>
                <th scope="col">Längd</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {backNine.map((length, index) => {
                const scoreIndex = frontNine.length + index;
                const holeNumber = scoreIndex + 1;

                return (
                  <tr key={holeNumber}>
                    <th scope="row">{holeNumber}</th>
                    <td>{length} m</td>
                    <td>
                      <StyledScoreInput
                        aria-label={`Score för hål ${holeNumber}`}
                        inputMode="numeric"
                        min="-2"
                        max="3"
                        name={`score-${holeNumber}`}
                        pattern="[0-9]*"
                        type="text"
                        value={scores[scoreIndex]}
                        onChange={(event) =>
                          updateScore(scoreIndex, event.target.value)
                        }
                        onBlur={(event) => {
                          if (event.target.value === "-") {
                            updateScore(scoreIndex, "");
                          }
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2} scope="row">
                  In
                </th>
                <StyledTotal>{hasBackScores ? backTotal : "–"}</StyledTotal>
              </tr>
            </tfoot>
          </StyledScoreTable>
        </StyledForm>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #dbd4c7",
            marginTop: "1rem",
          }}
        >
          <strong>Poängsystem</strong>

          <p> Hålad -2 poäng (eagle)</p>
          <p> 0-0,5m -1 poäng (birdie) </p>
          <p> 0,5-1m 0 poäng (par) </p>
          <p> 1-2m 1 poäng (bogey) </p>
          <p> 2-3m 2 poäng (dubbelbogey) </p>
          <p> 3m 3 poäng (trippelbogey) </p>
        </div>
      </StyledSheet>
    </StyledPage>
  );
};
