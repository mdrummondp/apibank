Feature: Is it Friday yet?

    Os dias precisam ser validos

    Scenario Outline: O dia não é valido
        O dia é "<day>"
        Quando é valido
        O dia deveria ser "<answer>"
