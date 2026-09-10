import { ArrowLeft, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import {
  StyledBackLink,
  StyledForm,
  StyledHeader,
  StyledPage,
  StyledReferenceCard,
  StyledReferenceTable,
  StyledReferenceTitle,
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
                      name={`score-${index + 1}`}
                      value={scores[index]}
                      onChange={(event) =>
                        updateScore(index, event.target.value)
                      }
                    >
                      <option value="">–</option>
                      <option value="-2">−2</option>
                      <option value="-1">−1</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </StyledScoreInput>
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
                        name={`score-${holeNumber}`}
                        value={scores[scoreIndex]}
                        onChange={(event) =>
                          updateScore(scoreIndex, event.target.value)
                        }
                      >
                        <option value="">–</option>
                        <option value="-2">−2</option>
                        <option value="-1">−1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </StyledScoreInput>
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
        <StyledReferenceCard>
          <StyledReferenceTitle>Snittscore herrar/pojkar</StyledReferenceTitle>
          <StyledReferenceTable>
            <tbody>
              <tr>
                <th scope="row">World class:</th>
                <td>−5,5</td>
              </tr>
              <tr>
                <th scope="row">European tour:</th>
                <td>−2,9</td>
              </tr>
              <tr>
                <th scope="row">Challenge tour:</th>
                <td>−1,5</td>
              </tr>
              <tr>
                <th scope="row">HCP +2:</th>
                <td>+0,2</td>
              </tr>
              <tr>
                <th scope="row">HCP scratch:</th>
                <td>+2,0</td>
              </tr>
              <tr>
                <th scope="row">HCP 5:</th>
                <td>+6,3</td>
              </tr>
              <tr>
                <th scope="row">HCP 10:</th>
                <td>+10,7</td>
              </tr>
            </tbody>
          </StyledReferenceTable>
        </StyledReferenceCard>
      </StyledSheet>
    </StyledPage>
  );
};
