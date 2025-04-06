# Plane Seat Locator

## Description

Finding your seat on a plane is never fun, particularly for a long-haul flight. You arrive, realize again just how little legroom you get, and sort of climb into the seat covered in a pile of your own stuff.

To make things more confusing (although they claim it's to simplify things), many airlines omit the letters **'I'** and **'J'** from their seat naming system.

## Seat Naming System

- The seat number (between **1-60**) indicates the section of the plane:
  - **1-20** → Front
  - **21-40** → Middle
  - **41-60** → Back
- The seat letter (**A-K**, excluding **I** and **J**) represents the seating cluster:
  - **A-C** → Left
  - **D-F** → Middle
  - **G-K** → Right

## Task

Given a seat number, return its location in the following format:

- **Example Input:**
  ```plaintext
  "2B"
  ```
- **Example Output:**
  ```plaintext
  "Front-Left"
  ```

### Edge Cases

- If the seat number is **greater than 60**, or the seat letter is **not valid**, return:
  ```plaintext
  "No Seat!!"

  ```
