# UK Driving License Number Generation

## Overview

In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicles on highways and some other roads accessible to the public.

- **England, Scotland, and Wales**: Administered by the Driver and Vehicle Licensing Agency (**DVLA**).
- **Northern Ireland**: Administered by the Driver & Vehicle Agency (**DVA**).

A driving licence is required for any person operating a vehicle on a public highway or road, as per the **Road Traffic Act 1988** in the UK and the **Road Traffic (Northern Ireland) Order 1981** in Northern Ireland.

_(Source: Wikipedia)_

## Task

The UK driving license number is generated using personal details of the driver. Below are the encoding rules.

## Rules

1. **1–5**: The first five characters of the **surname** (padded with `9`s if less than 5 characters).
2. **6**: The decade digit from the **year of birth** (e.g., for 1987 it would be `8`).
3. **7–8**: The **month of birth** (increment **7th character by 5** if the driver is female, i.e., `51–62` instead of `01–12`).
4. **9–10**: The **date within the month of birth**.
5. **11**: The **year digit** from the **year of birth** (e.g., for 1987 it would be `7`).
6. **12–13**: The **initial letter** of the **first name** and **middle name** (padded with `9` if no middle name).
7. **14**: An **arbitrary digit**, usually `9`, but decremented to differentiate drivers with the first 13 characters in common. We will always use `9`.
8. **15–16**: Two **computer check digits**, always set to "AA".

## Input Data Format

An **array** will be provided with the following structure:

```plaintext
[Forename, Middle Name (if any), Surname, Date of Birth, Gender]
```

### Example Input

```plaintext
data = ["John", "James", "Smith", "01-Jan-2000", "M"]
```

### Data Structure

- `data[0]` → **Forename**
- `data[1]` → **Middle Name** (if any)
- `data[2]` → **Surname**
- `data[3]` → **Date of Birth** (format: `Day-Month-Year`)
- `data[4]` → **Gender** (`M` for Male, `F` for Female)

## Output

You need to generate a **16-character** driving license number in **UPPERCASE**.

### Example Output

```plaintext
SMITH801010JJ9AA
```

Good luck and enjoy!
