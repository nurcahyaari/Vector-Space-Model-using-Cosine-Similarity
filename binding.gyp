{
  "targets": [{
    "include_dirs" : [
      "lib/native",
      "<!(node -e \"require('nan')\")"
    ],
    "target_name" : "addon",
    "sources": [
      "lib/native/main.cpp",
    ]
  }]
}