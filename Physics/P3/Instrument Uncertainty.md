

##  Standard Instrument Specifications

| Instrument                         | Typical Resolution (Smallest Division)                   | Standard Absolute Uncertainty ($\Delta x$)                                                                | Typical Use Case in Core Practicals                                       |
| :--------------------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Metre Ruler**                    | $1 \text{ mm}$ ($0.1 \text{ cm}$ / $0.001 \text{ m}$)    | $\pm 1 \text{ mm}$ (single reading)<br>$\pm 2 \text{ mm}$ (when measuring a length)*                      | Wire length ($l$), air column length ($L$), pendulum length.              |
| **Vernier Calipers**               | $0.1 \text{ mm}$ ($0.01 \text{ cm}$)                     | $\pm 0.1 \text{ mm}$                                                                                      | Internal/external diameters, block dimensions.                            |
| **Micrometer Screw Gauge**         | $0.01 \text{ mm}$ ($0.001 \text{ cm}$)                   | $\pm 0.01 \text{ mm}$                                                                                     | Wire diameter ($d$), thickness of thin sheets, ball bearing radius ($r$). |
| **Digital Top-Pan Balance**        | $0.01 \text{ g}$ or $0.1 \text{ g}$                      | $\pm 0.01 \text{ g}$ or $\pm 0.1 \text{ g}$                                                               | Mass of ball bearings, load masses.                                       |
| **Digital Multimeter (Voltmeter)** | $0.01 \text{ V}$                                         | $\pm 0.01 \text{ V}$                                                                                      | Terminal potential difference ($V$), diode voltage drops.                 |
| **Digital Multimeter (Ammeter)**   | $0.01 \text{ A}$ or $1 \text{ mA}$                       | $\pm 0.01 \text{ A}$ or $\pm 1 \text{ mA}$                                                                | Circuit current ($I$).                                                    |
| **Stopwatch (Digital)**            | $0.01 \text{ s}$                                         | $\pm 0.01 \text{ s}$ *(Resolution only)*<br>**Use $\pm 0.2$ to $0.5 \text{ s}$** for human reaction time. | Time of fall ($t$), oscillations periods ($T$).                           |
| **Thermometer (Liquid-in-glass)**  | $1\text{ }^\circ\text{C}$ or $0.5\text{ }^\circ\text{C}$ | $\pm 0.5\text{ }^\circ\text{C}$ or $\pm 0.25\text{ }^\circ\text{C}$                                       | Temperature change ($\Delta \theta$).                                     |
| **Protractor**                     | $1^\circ$                                                | $\pm 1^\circ$                                                                                             | Angle of incidence ($i$), angle of refraction ($r$).                      |

> [!NOTE] *The Metre Ruler Exception
> When measuring a fixed length (like the length of a wire), you must align the $0 \text{ cm}$ mark at one end and take a reading at the other end. Because you make **two judgements**, the uncertainties add up: $\pm 1 \text{ mm} + \pm 1 \text{ mm} = \pm 2 \text{ mm}$.

---

##  Exam Rules for Uncertainties

### 1. Human Reaction Time
If an exam question asks for the percentage uncertainty of a time reading taken manually with a stopwatch (e.g., timing a ball bearing dropping through liquid):
* **Never use the stopwatch resolution ($\pm 0.01 \text{ s}$)** to calculate uncertainty.
* **Always use human reaction time ($\pm 0.2 \text{ s}$ to $\pm 0.3 \text{ s}$)** as the absolute uncertainty instead.
* *Example Formula:* $\% \Delta t = \frac{0.2 \text{ s}}{\text{Measured Time}} \times 100\%$

### 2. Resolution vs. Uncertainty for Digital Instruments
For digital displays (like multimeters or balances), the absolute uncertainty is conventionally taken as **$\pm 1$ of the smallest measurable digit** (the resolution itself). 

### 3. Calculating Percentage Uncertainty from Multiple Readings (Repeats)
If you measure a quantity multiple times (e.g., measuring wire diameter $d$ three times at different orientations):
1. Find the **Range** $(\text{Maximum Value} - \text{Minimum Value})$.
2. Calculate the **Absolute Uncertainty**: 
   $$\Delta x = \frac{\text{Range}}{2}$$
3. Calculate the **Percentage Uncertainty**:
   $$\% \Delta x = \frac{\Delta x}{\text{Mean Value}} \times 100\%$$

---

## Tips for Uncertainty Reductions
When asked how to minimize percentage uncertainty for any given instrument without changing the instrument itself, **increase the magnitude of the measurement**.
* To lower the error of a ruler, measure a **longer distance**.
* To lower the error of a stopwatch, time **20 oscillations** instead of 1, then divide the total absolute uncertainty across the whole span.

## [[Core Practicals#1. Uncertainty Rules|Uncertainty Rules]]

* **Adding or Subtracting Values ($A = B \pm C$):** Add the **absolute** uncertainties.
  $$\Delta A = \Delta B + \Delta C$$
* **Multiplying or Dividing Values ($A = B \times C$ or $A = B / C$):** Add the **percentage** uncertainties.
  $$\% \Delta A = \% \Delta B + \% \Delta C$$
* **Power Functions ($A = B^n$):** Multiply the percentage uncertainty by the index $n$.
  $$\% \Delta A = n \times (\% \Delta B)$$


### 1. Uncertainty Rules
* **Adding or Subtracting Values ($A = B \pm C$):** Add the **absolute** uncertainties.
  $$\Delta A = \Delta B + \Delta C$$
* **Multiplying or Dividing Values ($A = B \times C$ or $A = B / C$):** Add the **percentage** uncertainties.
  $$\% \Delta A = \% \Delta B + \% \Delta C$$
* **Power Functions ($A = B^n$):** Multiply the percentage uncertainty by the index $n$.
  $$\% \Delta A = n \times (\% \Delta B)$$

### 2. Line of Best Fit vs. Worst Fit
* To calculate the percentage uncertainty in a gradient ($m$):
  1. Plot data points along with their vertical or horizontal **error bars**.
  2. Draw the **Line of Best Fit** ($m_{\text{best}}$) passing optimally through all points.
  3. Draw the **Line of Worst Fit** ($m_{\text{worst}}$). This is the steepest or shallowest possible straight line that still passes through all error bars.
  4. Calculate the uncertainty using:
     $$\% \text{ Uncertainty in Gradient} = \frac{|m_{\text{best}} - m_{\text{worst}}|}{m_{\text{best}}} \times 100\%$$

### 3. General Accuracy Routines
* **Zero Errors:** Always check instruments (micrometer, vernier calipers, digital scales) before taking readings. Record any shifting value and subtract/add it to all subsequent raw data measurements.
* **Parallax Error:** Position your eye line **perpendicularly** and level with the meniscus or scale marking to ensure precise readings.
* **Anomalous Values:** Inspect data tables before averaging. Explicitly cross out and exclude any anomalous entries from mean calculations.
* **Significant Figures (SF):** Final calculated answers must match the lowest number of significant figures present across the raw variables used.