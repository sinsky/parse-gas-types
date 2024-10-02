# Parse GAS Types

Extract type definitions from a network in AppsScript.

## Step

1. Open your browser's Dev Tools.
2. Open [script.new](https://script.new) or your GAS project.
3. Go to the network tab and search for batchexecute.
4. Get the Response that contains `browser.d.ts` near the beginning of the fourth line.
5. Please format the response.

## Format note

### Basic Features

#### Process data

1. Copy files
    Copy files
    ```shell
    mkdir processed
    cp raw/basic-features.txt processed/basic-features.txt
    ```
2. removed data
   1. Delete the first text
    before
    ```
    )
    ]
    }'

    3552093
    [["wrb.fr","C0veKb","[[[\"browser.d.ts\"...
    ```
    after
    ```
    [[[\"browser.d.ts\"...
    ```
    2. Delete the last text
    before
    ```
    ...WEDNESDAY:Weekday;}\"]]]",
    null,
    null,
    null,
    "generic"
    ]
    ]57[
        [
            "di",
            916
        ],
        [
            "af.httprm",
            915,
            "7324018726018604011",
            17
        ]
    ]29[
        [
            "e",
            4,
            null,
            null,
            3552567
        ]
    ]
    ```
    after
    ```
    ...WEDNESDAY:Weekday;}\"]]]
    ```
    3. Remove line breaks
    search keyword: \n <-- RegExp
    replace text:  <-- Empty
3. Run the macro.
    ```shell
    bun run scripts/parse-txt2types.ts processed/basic-features.txt
    ```