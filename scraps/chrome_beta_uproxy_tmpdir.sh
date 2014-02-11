#!/usr/bin/env bash

ROOT_DIR="$(cd "$(dirname $0)"; cd ..; pwd)";
PRG="$(basename "$0")"
USERNAME=$2
TOOL=$1


function fail()
{
  echo "$1" >&2
  exit 2
}

# choose from a collection of things
function choosefrom ()
{
  local RESULT=""
  local FILE=""

  for FILE in "$@"
  do
    [ -z "$RESULT" -a -e "$FILE" ] && RESULT="$FILE"
  done

  [ -z "$RESULT" ] && RESULT="$FILE"
  echo "$RESULT"
}

# usage message
function usage()
{
  echo
  echo "Usage: $PRG TOOL USER_NAME"
  echo
  echo "where TOOL is: "
  echo "  mac   -- to load chrome beta on mac"
  echo "and USER_NAME is the name postfixed to 'tmp/user_' to store local user data"
  echo
}

# run the quanto-core
function run_chrome_mac_chrome_beta ()
{
    CMD="/Applications/Google\ Chrome-beta.app/Contents/MacOS/Google\ Chrome --user-data-dir=${ROOT_DIR}/tmp/user_${USERNAME} --load-and-launch-app=${ROOT_DIR}/build/chrome_app --load-extension=${ROOT_DIR}/build/chrome_extension $@"
    echo "Running: $CMD"
    echo
    bash -c "$CMD"
}

if [ "$TOOL" = "mac" ]; then
    shift
    run_chrome_mac_chrome_beta
else 
    usage
fi

      
